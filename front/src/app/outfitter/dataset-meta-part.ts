import {DatasetMetaLayers} from "./dataset-meta-layers";
import {XY} from "./xy";

export class DatasetMetaPart {
  layers: DatasetMetaLayers;
  min: XY;
  max: XY;
}
