import {Component, Input, OnInit} from '@angular/core';
import {Trigger} from "../trigger";
import {Range} from "../range";

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
    this.pixels[x + 'x' + y] = this.colorIndex;
    this.trigger.fire();
  }
}
