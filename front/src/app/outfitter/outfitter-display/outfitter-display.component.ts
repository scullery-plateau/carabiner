import {Component, Input, OnInit} from '@angular/core';
import {Schematic} from "../schematic";
import {DatasetMeta} from "../dataset-meta";
import {XY} from "../xy";
import {SCALES} from "../scales";

@Component({
  selector: 'outfitter-display',
  templateUrl: './outfitter-display.component.html',
  styleUrls: ['./outfitter-display.component.scss']
})
export class OutfitterDisplayComponent implements OnInit {

  @Input()
  schematic: Schematic;

  @Input()
  meta: DatasetMeta;

  minX: number;
  minY: number;
  width: number;
  height: number;

  constructor() { }

  ngOnInit() {

  }

  bodyScaleXY(): XY {
    return new XY(SCALES[this.schematic.bodyScale] || [1.0, 1.0]);
  }

  dim(): string {
    let min = new XY([0,0]);
    let max = new XY([0,0]);
    this.schematic.layers.forEach((layer) => {
      let part = this.meta.parts[layer.part][layer.index];
      let flip = new XY([(layer.flip?-1.0:1.0),1.0]);
      min = min.min(part.min.times(layer.resize.times(flip)).plus(layer.move));
      max = max.max(part.max.times(layer.resize.times(flip)).plus(layer.move));
    });
    let resize = this.bodyScaleXY();
    min = min.times(resize);
    max = max.times(resize);
    let halfWidth = Math.max(Math.abs(max.x), Math.abs(min.x));
    min = new XY([-halfWidth,min.y]);
    max = new XY([halfWidth,max.y]);
    let padding = new XY([10,10]);
    min = min.minus(padding);
    max = max.plus(padding);
    this.minX = min.x;
    this.minY = min.y;
    this.width = max.x-min.x;
    this.height = max.y-min.y;
    return [this.minX, this.minY, this.width, this.height].join(" ");
  }

  bodyMatrix() {
    let resize = this.bodyScaleXY();
    return [resize.x, 0.0, 0.0, resize.y, 0.0, 0.0];
  }
}
