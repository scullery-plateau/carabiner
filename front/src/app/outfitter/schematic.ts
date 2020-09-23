import {SchematicLayer} from "./schematic-layer";

export class Schematic {
  bodyType: string;
  bgColor?: string;
  bgPattern?: number
  bodyScale?: string;
  layers: SchematicLayer[];

  constructor(bodyType: string) {
    this.bodyType = bodyType;
    this.layers = [];
  }
}
