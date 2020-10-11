import {SchematicLayer} from "./schematic-layer";

export class Schematic {
  bodyType: string;
  bgColor?: string;
  bgPattern?: number;
  bodyScale?: string;
  layers: SchematicLayer[];

  constructor(bodyType: string) {
    this.bodyType = bodyType;
    this.layers = [];
  }

  static fromJSON(args: {
    bodyType: string,
    bgColor?: string,
    bgPattern?: number,
    bodyScale?: string,
    layers: {
      part: string,
      index: number,
      base?: string,
      detail?: string,
      outline?: string,
      opacity?: number,
      pattern?: number,
      shading?: number,
      resize?: number[],
      move?: number[],
      flip?: boolean
    }[]
  }): Schematic {
    let out = new Schematic(args.bodyType);
    if (args.bgColor) {
      out.bgColor = args.bgColor;
    }
    if (args.bgPattern) {
      out.bgPattern = args.bgPattern;
    }
    if (args.bodyScale) {
      out.bodyScale = args.bodyScale;
    }
    out.layers = args.layers.map((l) => SchematicLayer.fromJSON(l));
    return out;
  }

  toJSON(): {
    bodyType: string,
    bgColor?: string,
    bgPattern?: number,
    bodyScale?: string,
    layers: {
      part: string,
      index: number,
      base?: string,
      detail?: string,
      outline?: string,
      opacity?: number,
      pattern?: number,
      shading?: number,
      resize?: number[],
      move?: number[],
      flip?: boolean
    }[]
  } {
    let out: {
      bodyType: string,
      bgColor?: string,
      bgPattern?: number,
      bodyScale?: string,
      layers: {
        part: string,
        index: number,
        base?: string,
        detail?: string,
        outline?: string,
        opacity?: number,
        pattern?: number,
        shading?: number,
        resize?: number[],
        move?: number[],
        flip?: boolean
      }[]
    } = {
      bodyType: this.bodyType,
      layers: this.layers.map((layer) => layer.toJSON())
    };
    if (this.bgColor) {
      out['bgColor'] = this.bgColor;
    }
    if (this.bgPattern && this.bgPattern >= 0) {
      out['bgPattern'] = this.bgPattern;
    }
    if (this.bodyScale && this.bodyScale.length > 0) {
      out['bodyScale'] = this.bodyScale;
    }
    return out;
  }
}
