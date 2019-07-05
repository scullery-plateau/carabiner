import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-palette-display',
  templateUrl: './palette-display.component.html',
  styleUrls: ['./palette-display.component.scss']
})
export class PaletteDisplayComponent implements OnInit {

  @Input()
  palette: string[];

  @Input()
  href: string;

  @Input()
  showFirst: boolean;

  @Input()
  selectFn: Function;

  @Input()
  setColorFn: Function;

  activeIndex: number;

  constructor() { }

  ngOnInit() {
  }

  select(index:number):void {
    this.selectFn(index);
    this.activeIndex = index;
  }

  setColor(index:number):void {
    this.select(index);
    this.setColorFn(index);
  }

}
