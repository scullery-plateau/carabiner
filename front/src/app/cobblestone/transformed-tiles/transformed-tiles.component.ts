import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TileTransformerService } from '../tile-transformer.service'
import { Trigger } from "../../util/trigger";

@Component({
  selector: 'app-transformed-tiles',
  templateUrl: './transformed-tiles.component.html',
  styleUrls: ['./transformed-tiles.component.scss']
})
export class TransformedTilesComponent implements OnInit {

  @Input()
  state: any;

  transForm: FormGroup = this.fb.group({
    paletteName:[''],
    tileName:[''],
    "flip-over":[''],
    "flip-down":[''],
    "turn-right":[''],
    "turn-left":['']
  });

  @Input()
  loadTrigger: Trigger;

  currentKey: string;

  selectedPalette: string[];

  selectedTile: any;

  constructor(private fb: FormBuilder, private ttf: TileTransformerService) { }

  ngOnInit() {
    let me = this;
    this.loadTrigger.addListener(() => {
      me.updateFromFile();
    })
  }

  updateFromFile() {
    let patch: {} = {};
    let paletteNames = this.state.palettes.keys();
    if (paletteNames.length > 0) {
      patch["selectedPalette"] = paletteNames[0];
    }
    let tileNames = this.state.tiles.keys();
    if (tileNames.length > 0) {
      patch["selectedTile"] = tileNames[0];
    }
    this.transForm.patchValue(patch);
    this.updateCurrentKey();
    console.log("updated from file")
  }

  getCurrentKey() {
    console.log("getting current key");
    let paletteName = this.transForm.value.selectedPalette;
    let palette = this.state.palettes[paletteName];
    if (palette) {
      console.log("palette");
      console.log(palette);
      let tileName = this.transForm.value.selectedTile;
      let tile = this.state.tiles[tileName];
      if (tile) {
        console.log("tile");
        console.log(tile);
        let values = this.transForm.value;
        var tfs = TransformedTilesComponent.tfLabels.map((label) => {
          return values[label];
        }).filter((tf) => {
          return tf.length > 0;
        });
        tfs.sort();
        let key = [tileName,paletteName].concat(tfs).join("_");
        console.log("key");
        console.log(key);
        return key;
      }
    }
  }

  updateCurrentKey() {
    this.currentKey = this.getCurrentKey();
    console.log("updated current key");
    console.log(this.currentKey);
  }

  setCurrentKey(key: string) {
    this.currentKey = key;
    let tfTile = this.ttf.buildTransformedTile(this.state,key);
    this.selectedPalette = tfTile.palette;
    this.selectedTile = tfTile.tile;
    let args = key.split("_");
    let values = {
      selectedPalette:args[1],
      selectedTile:args[0]
    };
    TileTransformerService.tfLabels.forEach((label) => {
      values[label] = (args.indexOf(label) > 0);
    });
    this.transForm.patchValue(values);
  }

  exists() {
    if (this.currentKey) {
      return this.state.transforms[this.currentKey];
    }
  }

  toggle() {
    let key = this.currentKey;
    if (key && this.state.transforms[key]) {
      delete this.state.transforms[key];
    } else {
      this.state.transforms[key] = this.ttf.buildTransformedTile(this.state,key);
    }
  }

  tileFrom(key: string) {
    if (key && this.state.transforms[key]) {
      return this.state.transforms[key].tile;
    }
  }

  paletteFrom(key: string) {
    if (key && this.state.transforms[key]) {
      return this.state.transforms[key].palette;
    }
  }
}
