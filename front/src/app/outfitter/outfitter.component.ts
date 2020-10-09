import { Component, OnInit } from '@angular/core';
import {OutfitterService} from "./outfitter.service";
import {DomSanitizer} from "@angular/platform-browser";
import {DatasetMeta} from "./dataset-meta";
import {Schematic} from "./schematic";
import {FormBuilder, FormGroup} from "@angular/forms";
import {isNumber} from "util";
import {SchematicLayer} from "./schematic-layer";
import {PART_TYPES} from "./part-types";

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
  processing: any;
  step: number = 0;
  maxStep: number = 5;
  ellipse: string = "";
  base64: string;

  fileName: string;
  defs: string;

  meta: DatasetMeta;
  schematic: Schematic;

  maxPartIndex: number;
  partTypes: string[] = PART_TYPES;

  selectedIndex: number = -1;

  ngOnInit() {
  }

  safeURL(base64: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64, " + base64);
  }

  stepAnimate() {
    let me = this;
    let animateStep = () => {
      me.step = (me.step + 1) % me.maxStep;
      me.ellipse = ".".repeat(me.step + 1);
      animateStep();
    };
    return animateStep;
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
        me.processing = setTimeout(me.stepAnimate(), 1000);
        let data = reader.result.toString();
        console.log(data);
        me.os.loadSchematic(data).subscribe((base64) => {
          me.base64 = base64;
          clearTimeout(me.processing);
          me.processing = undefined;
          me.ellipse = "";
        });
      };
      reader.readAsText(file);
    }
  }

  loadBodyType(bodyType: string) {
    this.os.getDatasetDefs(bodyType).subscribe((defs) => {
      console.log("defs");
      let start = defs.indexOf("<svg");
      console.log(start);
      this.defs = defs.substr(start);
    });
    this.os.getDatasetMeta(bodyType).subscribe((meta) => {
      this.meta = new DatasetMeta(meta);
    });
    this.schematic = new Schematic(bodyType);
    this.schematic.bodyType = bodyType;
    this.schematic.layers = [];
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
      this.schematicForm.patchValue(this.schematic.layers[this.selectedIndex].formValue());
      let partType = this.schematicForm.value.partType;
      this.maxPartIndex = this.meta.parts.get(partType).length;
    }
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
      this.loadSelectedLayer();
    }
  }

  moveToBack() {
    if (this.selectedIndex > 0 && this.selectedIndex < this.schematic.layers.length) {
      this.swapLayers(0,this.selectedIndex);
      this.selectedIndex = 0;
      this.schematicForm.patchValue({selectedLayer:this.selectedIndex});
      this.loadSelectedLayer();
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

  moveToFront() {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length-1) {
      this.swapLayers(this.selectedIndex,this.schematic.layers.length - 1);
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
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      let partType = this.schematicForm.value.partType;
      this.schematic.layers[this.selectedIndex].part = partType;
      this.maxPartIndex = this.meta.parts.get(partType).length;
    }
  }

  setPartIndex() {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      this.schematic.layers[this.selectedIndex].index = this.schematicForm.value.partIndex;
    }
  }

  setBaseColor(color: string) {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      this.schematicForm.patchValue({base:color});
      this.schematic.layers[this.selectedIndex].base = color;
    }
  }

  setDetailColor(color: string) {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      this.schematicForm.patchValue({detail:color});
      this.schematic.layers[this.selectedIndex].detail = color;
    }
  }

  setOutlineColor(color: string) {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      this.schematicForm.patchValue({outline:color});
      this.schematic.layers[this.selectedIndex].outline = color;
    }
  }

  setOpacity() {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      this.schematic.layers[this.selectedIndex].opacity = this.schematicForm.value.opacity;
    }
  }

  setPattern() {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      this.schematic.layers[this.selectedIndex].pattern = this.schematicForm.value.pattern;
    }
  }

  setShading() {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      this.schematic.layers[this.selectedIndex].shading = this.schematicForm.value.shading;
    }
  }

  setResizeX() {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      this.schematic.layers[this.selectedIndex].resize.x = this.schematicForm.value.resize_x;
    }
  }

  setResizeY() {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      this.schematic.layers[this.selectedIndex].resize.y = this.schematicForm.value.resize_y;
    }
  }

  setMoveX() {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      this.schematic.layers[this.selectedIndex].move.x = this.schematicForm.value.move_x;
    }
  }

  setMoveY() {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      this.schematic.layers[this.selectedIndex].move.y = this.schematicForm.value.move_y;
    }
  }

  toggleFlip() {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.schematic.layers.length) {
      let flip = !this.schematicForm.value.flip;
      this.schematicForm.patchValue({flip:flip});
      this.schematic.layers[this.selectedIndex].flip = flip;
    }
  }
}
