import { Injectable } from '@angular/core';
import { Point } from '../util/point';

@Injectable({
  providedIn: 'root'
})
export class TileTransformerService {

  constructor() { }

  static tfLabels = ["flip-over", "flip-down", "turn-right", "turn-left"];

  buildKey(state: any, mapping: {
    tileName: string,
    paletteName: string,
    transforms?: string[]
  } = {}) {
    mapping.transforms = mapping.transforms = [];
    let palette = state.palettes[mapping.paletteName];
    if (palette) {
      let tile = state.tiles[mapping.tileName];
      if (tile) {
        var tfs = TileTransformerService.tfLabels.map((label) => {
          return mapping[label];
        }).filter((tf) => {
          return tf.length > 0;
        });
        tfs.sort();
        return [mapping.tileName,mapping.paletteName].concat(tfs).join("_");
      }
    }
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
