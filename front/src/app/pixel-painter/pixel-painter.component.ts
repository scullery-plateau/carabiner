import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Trigger} from "../trigger";

@Component({
  selector: 'app-pixel-painter',
  templateUrl: './pixel-painter.component.html',
  styleUrls: ['./pixel-painter.component.scss']
})
export class PixelPainterComponent implements OnInit, OnChanges {
  @ViewChild('myCanvas') canvasRef: ElementRef;

  @Input()
  pixels: number[][];

  @Input()
  scale: number;

  @Input()
  palette: string[];

  @Input()
  trigger: Trigger;

  imgPath: string;

  constructor() { }

  ngOnInit() {
    this.trigger.addListener(e => {
      this.redraw();
    });
    this.redraw();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.redraw();
  }

  redraw() {
    console.log("started redrawing");
    let scale = this.scale;
    let ctx = this.canvasRef.nativeElement.getContext('2d');
    let palette = this.palette;
    ctx.clearRect(0, 0, 16 * scale, 16 * scale);
    this.pixels.forEach((row,y) => {
      row.forEach((c,x) => {
        if (palette[c]) {
          console.log(palette[c]);
          ctx.fillStyle = palette[c].toUpperCase();
          console.log([x * scale, y * scale, scale, scale]);
          ctx.fillRect(x * scale, y * scale, scale, scale);
        }
      })
    });
    this.imgPath = this.canvasRef.nativeElement.toDataURL();
    console.log(this.imgPath);
    console.log("finished redrawing");
  }
}
