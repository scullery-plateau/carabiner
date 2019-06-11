import {Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Trigger} from "../util/trigger";
import {Range} from "../util/range";

@Component({
  selector: 'app-pixel-painter',
  templateUrl: './pixel-painter.component.html',
  styleUrls: ['./pixel-painter.component.scss']
})
export class PixelPainterComponent implements OnInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;

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
  trigger: Trigger;

  @Input()
  imgFile: string;

  imgPath: string;

  constructor() { }

  ngOnInit() {
    this.trigger.addListener(e => {
      this.redraw();
    });
    this.redraw();
  }

  redraw() {
    console.log("started redrawing");
    let scale = this.scale;
    let ctx = this.canvasRef.nativeElement.getContext('2d');
    let palette = this.palette;
    ctx.clearRect(0, 0, this.width * scale, this.height * scale);
    let pixels = this.pixels;
    Range.max(this.height).forEach(y => {
      Range.max(this.width).forEach(x => {
        let key = x + 'x' + y;
        let c = pixels[key] || 0;
        if (palette[c]) {
          ctx.fillStyle = palette[c].toUpperCase();
          ctx.fillRect(x * scale, y * scale, scale, scale);
        }
      })
    });
    this.imgPath = this.canvasRef.nativeElement.toDataURL();
    console.log(this.imgPath);
    console.log("finished redrawing");
  }
}
