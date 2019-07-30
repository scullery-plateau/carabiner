import { Injectable } from '@angular/core';
import { Point } from '../util/point';
import {Transform} from "./model/transform";
import {TransformedTile} from "./model/TransformedTile";

@Injectable({
  providedIn: 'root'
})
export class TileTransformerService {

  constructor() { }

  parseKeyToForm(key: string): {} {
    let tile = TransformedTile.parse(key);
    let out: {
      selectedPalette?:string,
      selectedTile?:string,
      "flip-over"?:boolean,
      "flip-down"?:boolean,
      "turn-right"?:boolean,
      "turn-left"?:boolean
    } = {};
    out.selectedPalette = tile.paletteName;
    out.selectedTile = tile.tileName;
    Object.values(Transform).forEach(tf => {
      out[tf] = (tile.transforms.indexOf(tf) >= 0);
    });
    return out;
  }

  printFormKey(formValue: {
    selectedPalette?:string,
    selectedTile?:string,
    "flip-over"?:boolean,
    "flip-down"?:boolean,
    "turn-right"?:boolean,
    "turn-left"?:boolean
  } = {}): string {
    var tfs = Object.values(Transform).filter((tf) => {
      return formValue[tf];
    });
    tfs.sort();
    return [formValue.selectedTile,formValue.selectedPalette].concat(tfs).join("_");
  }

  buildTransformedTile(state: any, key: string) {
    let out: any = {};
    let attrs = key.split("_");
    out.palette = state.palettes[attrs[1]];
    let transforms = attrs.splice(2);
    out.tile = {};
    let pixels = out["tile"];
    let temp = state.tiles[attrs[0]];
    if (temp) {
      Object.entries(temp).forEach((pair) => {
        let pixel = transforms.reduce((p,tf) => {
          return p[tf](16,16);
        },Point.parse(pair[0]));
        let c = pair[1];
        pixels[pixel.toString()] = c;
      })
    }
    return out;
  }
}
