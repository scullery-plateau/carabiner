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

  constructor() { }

  ngOnInit() {
  }

  isValid() {
    return this.palette && this.pixels;
  }

}
