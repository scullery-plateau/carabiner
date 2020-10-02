import {Component, Input, OnInit} from '@angular/core';
import {SchematicLayer} from "../schematic-layer";
import {DatasetMeta} from "../dataset-meta";

@Component({
  selector: 'display-layer',
  templateUrl: './display-layer.component.html',
  styleUrls: ['./display-layer.component.scss']
})
export class DisplayLayerComponent implements OnInit {

  @Input()
  layer: SchematicLayer;

  @Input()
  meta: DatasetMeta;

  constructor() { }

  ngOnInit() {
  }

}
