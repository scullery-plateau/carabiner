import {XY} from "./xy";

export class SchematicLayer {
  part: string;
  index: number;
  base?: string;
  detail?: string;
  outline?: string;
  pattern?: number;
  shading?: number;
  resize?: XY;
  move?: XY;
  flip?: boolean;
}
