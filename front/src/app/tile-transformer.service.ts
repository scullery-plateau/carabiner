import { Injectable } from '@angular/core';
import { Point } from './point';

@Injectable({
  providedIn: 'root'
})
export class TileTransformerService {

  constructor() { }

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
