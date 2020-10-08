import {DatasetMetaLayers} from "./dataset-meta-layers";
import {XY} from "./xy";

export class DatasetMetaPart {
  layers: DatasetMetaLayers;
  min: XY;
  max: XY;

  constructor(args: {layers:any,min:number[],max:number[]}) {
    this.layers = new DatasetMetaLayers(args.layers);
    this.min = new XY(args.min);
    this.max = new XY(args.max);
  }
}
