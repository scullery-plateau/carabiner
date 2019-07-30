import {Component, Input, OnInit} from '@angular/core';
import {TransformedTile} from "../model/TransformedTile";

@Component({
  selector: 'tf-tile-def',
  templateUrl: './transformed-tile-def.component.html',
  styleUrls: ['./transformed-tile-def.component.scss']
})
export class TransformedTileDefComponent implements OnInit {

  @Input()
  state: any;

  @Input()
  scale: number;

  constructor() { }

  ngOnInit() {
  }

  getPalette(key: string): string[] {
    let tfTile = TransformedTile.parse(key);
    return this.state.palettes[tfTile.paletteName];
  }

  getPixels(key: string): Map<string,string> {
    return null;
  }
}
