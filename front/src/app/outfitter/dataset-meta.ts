import {DatasetMetaPart} from "./dataset-meta-part";

export class DatasetMeta {
  patternCount: number;
  shadingCount: number;
  parts: Map<string,DatasetMetaPart[]>

  constructor(args: {
    parts:{},
    'pattern-count':number,
    'shading-count':number
  }) {
    this.patternCount = args['pattern-count'];
    this.shadingCount = args['shading-count'];
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
