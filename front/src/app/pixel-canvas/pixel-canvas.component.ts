import {Component, Input, OnInit} from '@angular/core';
import {Trigger} from "../trigger";

@Component({
  selector: 'app-pixel-canvas',
  templateUrl: './pixel-canvas.component.html',
  styleUrls: ['./pixel-canvas.component.scss']
})
export class PixelCanvasComponent implements OnInit {

  @Input()
  pixels: number[][];

  @Input()
  scale: number;

  @Input()
  palette: string[];

  @Input()
  backgroundColor: string;

  @Input()
  colorIndex: number;

  @Input()
  trigger: Trigger;

  constructor() { }

  ngOnInit() {
  }

  setColorForPixel(x:number,y:number) {
    this.pixels[y][x] = this.colorIndex;
    this.trigger.fire();
  }
}
