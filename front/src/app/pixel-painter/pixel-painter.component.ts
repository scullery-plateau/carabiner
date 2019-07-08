import {Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
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
  download: any;

  range = Range;

  constructor() { }

  ngOnInit() {
  }
}
