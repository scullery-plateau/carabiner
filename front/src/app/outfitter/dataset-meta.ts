import {DatasetMetaPart} from "./dataset-meta-part";

export class DatasetMeta {
  patternCount: number;
  shadingCount: number;
  parts: Map<string,DatasetMetaPart[]>

  constructor(args: {
    parts:{},
    patternCount:number,
    shadingCount:number
  }) {
    this.patternCount = args.patternCount;
    this.shadingCount = args.shadingCount;
    this.parts = new Map<string, DatasetMetaPart[]>();
    let me = this;
    Object.entries(args.parts).forEach(([key, value]) => {
      let parts: DatasetMetaPart[] = [];
      Array.from(value as any[]).forEach((p) => {
        parts.push(new DatasetMetaPart(p));
      });
      me.parts.set(key,parts);
    });
  }
}
