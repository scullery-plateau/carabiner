import {Component, Input, OnInit} from '@angular/core';
import {SchematicLayer} from "../schematic-layer";
import {DatasetMeta} from "../dataset-meta";
import {DatasetMetaPart} from "../dataset-meta-part";

@Component({
  selector: 'display-layer',
  templateUrl: './display-layer.component.html',
  styleUrls: ['./display-layer.component.scss']
})
export class DisplayLayerComponent implements OnInit {

  @Input()
  layer: SchematicLayer;

  @Input()
  part: DatasetMetaPart;

  constructor() { }

  ngOnInit() {
  }

  matrix(): string {
    return "matrix(" + [(this.layer.flip?-1:1)*this.layer.resize.x, 0.0, 0.0, this.layer.resize.y, this.layer.move.x, this.layer.move.y].join(" ") + ")";
  }
}
