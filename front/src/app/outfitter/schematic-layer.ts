import {XY} from "./xy";

export class SchematicLayer {
  part: string = 'arm';
  index: number = 0;
  base?: string;
  detail?: string;
  outline?: string;
  opacity?: number;
  pattern?: number;
  shading?: number = 1;
  resize?: XY = new XY([1,1]);
  move?: XY = new XY([0,0]);
  flip?: boolean;

  formValue() {
    return {
      partType: this.part,
      partIndex: this.index,
      base: this.base,
      detail: this.detail,
      outline: this.outline,
      opacity: this.opacity,
      pattern: this.pattern,
      shading: this.shading,
      resize_x: this.resize.x,
      resize_y: this.resize.y,
      move_x: this.move.x,
      move_y: this.move.y,
      flip: this.flip
    };
  }
}
