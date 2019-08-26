import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tf-tile-disp',
  templateUrl: './transformed-tile-display.component.html',
  styleUrls: ['./transformed-tile-display.component.scss']
})
export class TransformedTileDisplayComponent implements OnInit {

  @Input()
  tf: {
    key:string,
    bg?:string,
    pixels:{
      x:number,
      y:number,
      fill:string
    }[]
  };

  constructor() { }

  ngOnInit() {
  }
}
