import {Component, Input, OnInit} from '@angular/core';
import {Tile} from "../tile";

@Component({
  selector: 'app-tile-canvas',
  templateUrl: './tile-canvas.component.html',
  styleUrls: ['./tile-canvas.component.scss']
})
export class TileCanvasComponent implements OnInit {

  @Input()
  tile: Tile;

  constructor() { }

  ngOnInit() {
  }

}
