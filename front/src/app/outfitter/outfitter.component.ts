import { Component, OnInit } from '@angular/core';
import {OutfitterService} from "./outfitter.service";
import {DomSanitizer} from "@angular/platform-browser";
import {DatasetMeta} from "./dataset-meta";
import {Schematic} from "./schematic";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SchematicLayer} from "./schematic-layer";
import {PART_TYPES} from "./part-types";
import {PartType} from "./part-type";
import {PART_GROUPS} from "./part-groups";
import {SCALES} from "./scales";

@Component({
  selector: 'app-outfitter',
  templateUrl: './outfitter.component.html',
  styleUrls: ['./outfitter.component.scss']
})
export class OutfitterComponent implements OnInit {

  constructor(private os : OutfitterService, private sanitizer:DomSanitizer, private fb: FormBuilder) { }

  schematicForm: FormGroup = this.fb.group({
    bgColor:[''],
    bgPattern:[-1],
    bodyScale:[''],
    selectedLayer:[-1],
    partType:[''],
    partIndex:[0],
    base:[''],
    detail:[''],
    outline:[''],
    opacity:[1],
    pattern:[-1],
    shading:[-1],
    resize_x:[1],
    resize_y:[1],
    move_x:[0],
    move_y:[0],
    flip:[false]
  });
  processing: boolean;
  base64: string;

  fileName: string;
  defs: string;

  meta: DatasetMeta;
  schematic: Schematic;

  maxPartIndex: number;
  partGroups: string[] = PART_GROUPS;

  partTypes: Map<string,PartType[]> = PART_TYPES;

  selectedIndex: number = -1;
  selectedLayer: SchematicLayer;

  bodyScaleNames: string[] = Object.keys(SCALES);

  ngOnInit() {
  }

  safeURL(base64: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64, " + base64);
  }

  loadBodyType(bodyType: string,onMetaLoad?:()=>void) {
    this.os.getDatasetDefs(bodyType).subscribe((defs) => {
      let start = defs.indexOf("<svg");
      this.defs = defs.substr(start);
    });
    this.os.getDatasetMeta(bodyType).subscribe((meta) => {
      console.log(meta);
      this.meta = new DatasetMeta(meta);
      if (onMetaLoad) {
        onMetaLoad();
      }
    });
  }

  loadNew(bodyType: string) {
    this.schematic = new Schematic(bodyType);
    this.schematic.bodyType = bodyType;
    this.schematic.bgColor = "#cccccc";
    this.schematic.layers = [
      {"part":"torso","index":0,"shading":0},
      {"part":"legs","index":0,"shading":0},
      {"part":"arm","index":0,"shading":0},
      {"part":"arm","index":0,"shading":0,"flip":true},
      {"part":"head","index":0,"shading":0},
    ].map(SchematicLayer.fromJSON);
    this.schematicForm.patchValue({
      bgColor:this.schematic.bgColor,
      selectedLayer:4
    });
    this.loadBodyType(bodyType,()=>{
      this.loadSelectedLayer();
    });
  }

  loadSchematic(e) {
    let files = Array.from(e.target.files);
    if (files.length > 0) {
      let file : File = <File>files[0];
      this.fileName = file.name;
      this.base64 = undefined;
      let me = this;
      let reader = new FileReader();
      reader.onload = function() {
        let data:string = reader.result.toString();
        me.schematic = Schematic.fromJSON(JSON.parse(data));
        me.loadBodyType(me.schematic.bodyType,()=>{
          if (me.schematic.layers.length > 0) {
            me.schematicForm.patchValue({selectedLayer:0});
            me.loadSelectedLayer();
          }
        });
      };
      reader.readAsText(file);
    }
  }

  compileSchematic(e) {
    let files = Array.from(e.target.files);
    if (files.length > 0) {
      let file : File = <File>files[0];
      this.fileName = file.name;
      this.base64 = undefined;
      let me = this;
      let reader = new FileReader();
      reader.onload = function() {
        let data = reader.result.toString();
        me.processing = true;
        me.os.loadSchematic(data).subscribe((base64) => {
          me.base64 = base64;
          me.processing = false;
        });
      };
      reader.readAsText(file);
    }
  }

  setBodyScale() {
    this.schematic.bodyScale = this.schematicForm.value.bodyScale;
  }

  setBackgroundColor(selectedColor: string) {
    this.schematic.bgColor = selectedColor;
    this.schematicForm.patchValue({bgColor:selectedColor});
  }

  setBGPattern() {
    this.schematic.bgPattern = this.schematicForm.value.bgPattern;
  }

  loadSelectedLayer() {
    this.selectedIndex = ((typeof this.schematicForm.value.selectedLayer) === "string")?parseInt(this.schematicForm.value.selectedLayer):(this.schematicForm.value.selectedLayer as number);
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      this.selectedLayer = this.schematic.layers[this.selectedIndex];
      this.schematicForm.patchValue(this.selectedLayer.formValue());
      let partType = this.schematicForm.value.partType;
      this.maxPartIndex = this.meta.parts.get(partType).length;
    }
  }

  private clearSelectedLayer() {
    this.selectedIndex = -1;
    this.selectedLayer = undefined;
  }

  addLayer() {
    this.schematic.layers.push(new SchematicLayer());
    this.schematicForm.patchValue({selectedLayer:this.schematic.layers.length - 1});
    this.maxPartIndex = 0;
    this.loadSelectedLayer();
  }

  removeCurrentLayer() {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      this.schematic.layers.splice(this.selectedIndex,1);
      if (this.selectedIndex === this.schematic.layers.length) {
        this.selectedIndex--;
        this.schematicForm.patchValue({selectedLayer:this.selectedIndex});
      }
      if (this.schematic.layers.length > 0) {
        this.loadSelectedLayer();
      } else {
        this.clearSelectedLayer();
      }
    }
  }

  moveBack() {
    if (this.selectedIndex > 0 && this.selectedIndex < this.schematic.layers.length) {
      this.swapLayers(this.selectedIndex-1,this.selectedIndex);
      this.selectedIndex--;
      this.schematicForm.patchValue({selectedLayer:this.selectedIndex});
      this.loadSelectedLayer();
    }
  }

  moveForward() {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length-1) {
      this.swapLayers(this.selectedIndex,this.selectedIndex+1);
      this.selectedIndex++;
      this.schematicForm.patchValue({selectedLayer:this.selectedIndex});
      this.loadSelectedLayer();
    }
  }

  moveToBack() {
    if (this.selectedIndex > 0 && this.selectedIndex < this.schematic.layers.length) {
      let temp = this.schematic.layers.splice(this.selectedIndex,1)[0];
      this.schematic.layers.unshift(temp);
      this.selectedIndex = 0;
      this.schematicForm.patchValue({selectedLayer:this.selectedIndex});
      this.loadSelectedLayer();
    }
  }

  moveToFront() {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length-1) {
      let temp = this.schematic.layers.splice(this.selectedIndex,1)[0];
      this.schematic.layers.push(temp);
      this.selectedIndex = this.schematic.layers.length - 1;
      this.schematicForm.patchValue({selectedLayer:this.selectedIndex});
      this.loadSelectedLayer();
    }
  }

  private swapLayers(a: number, b: number) {
    let temp = this.schematic.layers[a];
    this.schematic.layers[a] = this.schematic.layers[b];
    this.schematic.layers[b] = temp;
  }

  setPartType() {
    if (this.selectedLayer) {
      let partType = this.schematicForm.value.partType;
      console.log("setting part type: " + partType);
      this.selectedLayer.part = partType;
      console.log("meta keys: ");
      console.log(this.meta.parts);
      this.maxPartIndex = this.meta.parts.get(partType).length - 1;
      if(this.schematicForm.value.partIndex > this.maxPartIndex) {
        this.schematicForm.patchValue({partIndex:this.maxPartIndex});
        this.selectedLayer.index = this.maxPartIndex;
      }
    }
  }

  setPartIndex() {
    if (this.selectedLayer) {
      this.selectedLayer.index = this.schematicForm.value.partIndex;
    }
  }

  setBaseColor(color: string) {
    if (this.selectedLayer) {
      this.schematicForm.patchValue({base:color});
      this.selectedLayer.base = color;
    }
  }

  setDetailColor(color: string) {
    if (this.selectedLayer) {
      this.schematicForm.patchValue({detail:color});
      this.selectedLayer.detail = color;
    }
  }

  setOutlineColor(color: string) {
    if (this.selectedLayer) {
      this.schematicForm.patchValue({outline:color});
      this.selectedLayer.outline = color;
    }
  }

  setOpacity() {
    if (this.selectedLayer) {
      this.selectedLayer.opacity = this.schematicForm.value.opacity;
    }
  }

  setPattern() {
    if (this.selectedLayer) {
      this.selectedLayer.pattern = this.schematicForm.value.pattern;
    }
  }

  setShading() {
    if (this.selectedLayer) {
      this.selectedLayer.shading = this.schematicForm.value.shading;
    }
  }

  setResizeX() {
    if (this.selectedLayer) {
      this.selectedLayer.resize.x = this.schematicForm.value.resize_x;
    }
  }

  setResizeY() {
    if (this.selectedLayer) {
      this.selectedLayer.resize.y = this.schematicForm.value.resize_y;
    }
  }

  setMoveX() {
    if (this.selectedLayer) {
      this.selectedLayer.move.x = this.schematicForm.value.move_x;
    }
  }

  setMoveY() {
    if (this.selectedLayer) {
      this.selectedLayer.move.y = this.schematicForm.value.move_y;
    }
  }

  toggleFlip() {
    if (this.selectedLayer) {
      let flip = !this.schematicForm.value.flip;
      this.schematicForm.patchValue({flip:flip});
      this.selectedLayer.flip = flip;
    }
  }

  saveData() {
    this.os.downloadSchematic(this.schematic);
  }

  saveImage() {
    let me = this;
    me.processing = true;
    me.fileName = "outfit.png";
    this.os.downloadImage(this.schematic,()=>{
      me.processing = false;
    });
  }
}
