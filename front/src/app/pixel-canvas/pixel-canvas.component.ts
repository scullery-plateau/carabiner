import {Component, Input, OnInit} from '@angular/core';
import {Trigger} from "../trigger";
import {Range} from "../range";
import {Point} from "../point";

@Component({
  selector: 'app-pixel-canvas',
  templateUrl: './pixel-canvas.component.html',
  styleUrls: ['./pixel-canvas.component.scss']
})
export class PixelCanvasComponent implements OnInit {

  @Input()
  pixels: {};

  @Input()
  scale: number;

  @Input()
  width: number;

  @Input()
  height: number;

  @Input()
  palette: string[];

  @Input()
  backgroundColor: string;

  @Input()
  colorIndex: number;

  @Input()
  trigger: Trigger;

  range = Range;

  constructor() { }

  ngOnInit() {
  }

  setColorForPixel(x:number,y:number) {
    let key = (new Point(x,y)).toString();
    if (this.pixels[key] === this.colorIndex) {
      delete this.pixels[key];
    } else {
      this.pixels[key] = this.colorIndex;
    }
    this.trigger.fire();
  }

  doOutline:boolean = false;
  initPoint:Point;
  startCorner:Point;
  outlineDim:Point;

  initOutline(e) {
    this.doOutline = true;
    this.initPoint = Point.parse(e.target.attributes.alt.value);
    this.startCorner = this.initPoint
    this.outlineDim = new Point(1,1);
  }

  adjustOutline(e) {
    if (this.doOutline) {
      let temp = Point.parse(e.target.attributes.alt.value);
      let min = this.initPoint.min(temp);
      let max = this.initPoint.max(temp);
      this.startCorner = min;
      this.outlineDim = max.minus(min).plus(new Point(1,1));
    }
  }

  completeOutline(e) {
    this.doOutline = false;
    console.log("complete")
    Range.max(this.outlineDim.y).forEach((y) => {
      Range.max(this.outlineDim.x).forEach((x) => {
        let key = (this.startCorner.plus(new Point(x,y))).toString();
        if (this.pixels[key] === this.colorIndex) {
          delete this.pixels[key];
        } else {
          this.pixels[key] = this.colorIndex;
        }
      })
    })
    this.initPoint = undefined;
    this.outlineDim = undefined;
    this.startCorner = undefined;
  }

  hasOutline() {
    return this.outlineDim;
  }
}
