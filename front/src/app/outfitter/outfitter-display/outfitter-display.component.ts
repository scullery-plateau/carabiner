import {Component, Input, OnInit} from '@angular/core';
import {Schematic} from "../schematic";
import {DatasetMeta} from "../dataset-meta";

@Component({
  selector: 'outfitter-display',
  templateUrl: './outfitter-display.component.html',
  styleUrls: ['./outfitter-display.component.scss']
})
export class OutfitterDisplayComponent implements OnInit {

  @Input()
  schematic: Schematic;

  @Input()
  meta: DatasetMeta;

  minX: number;
  minY: number;
  width: number;
  height: number;

  constructor() { }

  ngOnInit() {

  }

  dim(): string {
    this.minX = -10;
    this.minY = -10;
    this.width = 20;
    this.height = 20;
    return [this.minX, this.minY, this.width, this.height].join(" ");
  }
}
