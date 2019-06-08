import { Component, OnInit, Input } from '@angular/core';
import { Range } from '../range'
import { Point } from '../point'

@Component({
  selector: 'tile-display',
  templateUrl: './tile-display.component.html',
  styleUrls: ['./tile-display.component.scss']
})
export class TileDisplayComponent implements OnInit {

  @Input()
  state: any;

  @Input()
  key: string;

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
        Object.entries(pixels).forEach((pair) => {
          let pixel = this.transforms.reduce((p,tf) => {
            return p[tf](16,16);
          },Point.parse(pair[0]));
          let c = pair[1];
          pixels[pixel.toString()] = c;
        })
      }
    }
  }

  isValid() {
    return this.palette && this.pixels;
  }

  pixel(x:number,y:number) {
    return this.palette[this.pixels[x + 'x' + y] || 0];
  }
}
