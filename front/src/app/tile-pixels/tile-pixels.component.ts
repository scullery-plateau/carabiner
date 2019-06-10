import { Component, OnInit, Input } from '@angular/core';
import { Range } from '../range'
import { Point } from '../point'

@Component({
  selector: 'tile-pixels',
  templateUrl: './tile-pixels.component.html',
  styleUrls: ['./tile-pixels.component.scss']
})
export class TilePixelsComponent implements OnInit {

  @Input()
  state: any;

  @Input()
  key: string;

  @Input()
  scale: number;

  palette: string[];

  pixels: {} = {};

  transforms: string[];

  range = Range;

  constructor() { }

  ngOnInit() {
    if (this.key) {
      let attrs = this.key.split("_");
      this.palette = this.state.palettes[attrs[1]];
      this.transforms = attrs.splice(2);
      this.pixels = {};
      let pixels = this.pixels;
      let temp = this.state.tiles[attrs[0]];
      if (temp) {
        Object.entries(temp).forEach((pair) => {
          let pixel = this.transforms.reduce((p,tf) => {
            return p[tf](16,16);
          },Point.parse(pair[0]));
          let c = pair[1];
          pixels[pixel.toString()] = c;
        })
      }
    }
  }

  pixel(x:number,y:number) {
    return this.palette[this.pixels[x + 'x' + y] || 0];
  }
}
