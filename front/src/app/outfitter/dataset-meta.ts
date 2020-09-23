import {DatasetMetaPart} from "./dataset-meta-part";

export class DatasetMeta {
  patternCount: number;
  shadingCount: number;
  parts: Map<string,DatasetMetaPart[]>
}
