import { Injectable } from '@angular/core';
import { Point } from '../util/point';
import {Transform} from "./model/transform";
import {TransformedTile} from "./model/TransformedTile";

const tfs: {} = {
  "turn-left":"turnLeft",
  "turn-right":"turnRight",
  "flip-down":"flipDown",
  "flip-over":"flipOver"
};

@Injectable({
  providedIn: 'root'
})
export class TileTransformerService {

  constructor() { }

  parseMappingToKey(tfTile:TransformedTile): string {
    var tfs = Object.values(Transform).filter((tf) => {
      return tfTile.transformations.indexOf(tf) >= 0;
    });
    tfs.sort();
    return [tfTile.tileName,tfTile.paletteName].concat(tfs).join("_");
  }

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
      out[tf] = (tile.transformations.indexOf(tf) >= 0);
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
    console.log("building tracking");
    if (state.transforms) {
      let myChar = state.transforms.get(key);
      console.log("my char");
      console.log(myChar);
      if (myChar) {
        let tf:{
          key:string,
          bg?:string,
          pixels:{
            x:number,
            y:number,
            fill:string
          }[]
        } = {
          key:key,
          pixels:[]
        };
        let mapping:TransformedTile = state.mapping.get(myChar);
        console.log(mapping);
        let palette:string[] = state.palettes.get(mapping.paletteName);
        console.log(palette);
        let tile:any = state.tiles.get(mapping.tileName);
        console.log(tile);
        if (palette && tile) {
          if (palette[0]) {
            tf.bg = palette[0];
          }
          Object.entries(tile).forEach((entry) => {
            let coord: string = entry[0];
            let colorIndex:any = entry[1];
            let point = mapping.transformations.reduce((p,tf) => {
              return p[tfs[tf]](16,16);
            },Point.parse(coord));
            let pixel:{
              x:number,
              y:number,
              fill:string
            } = {
              x:point.x,
              y:point.y,
              fill:palette[colorIndex]
            };
            tf.pixels.push(pixel);
          });
          console.log(tf);
          return tf;
        }
      }
      console.log()
      return null;
    }
  }
}
