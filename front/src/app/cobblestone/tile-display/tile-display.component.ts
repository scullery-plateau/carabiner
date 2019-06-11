import { Component, OnInit, Input } from '@angular/core';
import { TileTransformerService } from '../tile-transformer.service'
import { Range } from '../../util/range'
import { Point } from '../../util/point'

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

  scale: number = 1;

  palette: string[];

  pixels: {} = {};

  range = Range;

  constructor(private ttf: TileTransformerService) { }

  ngOnInit() {
    if (this.key) {
      let tfTile = this.ttf.buildTransformedTile(this.state,this.key);
      this.palette = tfTile.palette;
      this.pixels = tfTile.tile;
    }
  }

  pixel(x:number,y:number) {
    return this.palette[this.pixels[x + 'x' + y] || 0];
  }
}
