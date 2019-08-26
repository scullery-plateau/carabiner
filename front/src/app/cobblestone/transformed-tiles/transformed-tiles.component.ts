import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TileTransformerService } from '../tile-transformer.service'
import { Trigger } from "../../util/trigger";
import {Transform} from "../model/transform";
import {CharIndexService} from "../char-index.service";
import {TransformedTile} from "../model/TransformedTile";

@Component({
  selector: 'app-transformed-tiles',
  templateUrl: './transformed-tiles.component.html',
  styleUrls: ['./transformed-tiles.component.scss']
})
export class TransformedTilesComponent implements OnInit {

  @Input()
  state: any;

  @Input()
  scale: number;

  unusedChars:string[];

  transForm: FormGroup = this.fb.group({
    selectedChar:[''],
    selectedPalette:[''],
    selectedTile:[''],
    "flip-over":[''],
    "flip-down":[''],
    "turn-right":[''],
    "turn-left":['']
  });

  @Input()
  loadTrigger: Trigger;

  @Input()
  transformTrigger: Trigger;

  currentKey: string;

  selectedPalette: string[];

  selectedTile: any;

  constructor(private fb: FormBuilder,
              private ttf: TileTransformerService,
              private cis: CharIndexService) { }

  ngOnInit() {
    let me = this;
    this.loadTrigger.addListener(() => {
      me.updateFromFile();
      me.transformTrigger.fire();
    });
    this.transformTrigger.addListener(() => {
      let tmp = [];
      me.state.transforms.forEach((v,k) => {
        tmp.push(v);
      });
      me.unusedChars = me.cis.getUnused(tmp.join(""));
    })
  }

  updateFromFile() {
    let patch: {} = {};
    let paletteNames:string[] = [];
    this.state.palettes.forEach((v,k) => paletteNames.push(k));
    if (paletteNames.length > 0) {
      patch["selectedPalette"] = paletteNames[0];
    }
    let tileNames:string[] = [];
    this.state.tiles.forEach((v,k) => tileNames.push(k));
    if (tileNames.length > 0) {
      patch["selectedTile"] = tileNames[0];
    }
    this.transForm.patchValue(patch);
    this.updateCurrentKey();
  }

  updateCurrentKey() {
    this.setCurrentKey(this.ttf.printFormKey(this.transForm.value));
  }

  setCurrentKey(key: string) {
    this.currentKey = key;
    this.transForm.patchValue(this.ttf.parseKeyToForm(key));
    this.selectedPalette = this.state.palettes[this.transForm.value.selectedPalette];
    this.selectedTile = this.state.palettes[this.transForm.value.selectedTile];
  }

  buildTile(key: string): any {
    return this.ttf.buildTransformedTile(this.state,key);
  }

  exists() {
    if (this.currentKey) {
      return this.state.transforms[this.currentKey];
    }
  }

  toggle() {
    let key = this.currentKey;
    if (key && this.state.transforms[key]) {
      let myChar = this.state.transforms[key];
      delete this.state.transforms[key];
      delete this.state.mapping[myChar];
    } else {
      this.state.transforms[key] = this.transForm.value.selectedChar;
      this.state.mapping[this.transForm.value.selectedChar] = TransformedTile.parse(this.ttf.printFormKey(this.transForm.value));
    }
    this.transformTrigger.fire();
  }
}
