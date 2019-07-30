import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TileTransformerService } from '../tile-transformer.service'
import { Trigger } from "../../util/trigger";
import {Transform} from "../model/transform";

@Component({
  selector: 'app-transformed-tiles',
  templateUrl: './transformed-tiles.component.html',
  styleUrls: ['./transformed-tiles.component.scss']
})
export class TransformedTilesComponent implements OnInit {

  @Input()
  state: any;

  transForm: FormGroup = this.fb.group({
    selectedPalette:[''],
    selectedTile:[''],
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

  static tfLabels: string[] = ["flip-over", "flip-down", "turn-right", "turn-left"];

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
    return this.ttf.printFormKey(this.transForm.value);
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
    Object.values(Transform).forEach((label) => {
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
}
