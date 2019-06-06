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
  selectFn: Function;

  constructor() { }

  ngOnInit() {
  }

}
