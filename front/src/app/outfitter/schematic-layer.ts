import {XY} from "./xy";

export class SchematicLayer {
  part: string = 'arm';
  index: number = 0;
  base?: string;
  detail?: string;
  outline?: string;
  opacity?: number;
  pattern?: number;
  shading?: number = 0;
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

  static fromJSON(args: {
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
  }): SchematicLayer {
    let out = new SchematicLayer();
    out.part = args.part;
    out.index = args.index;
    if (args.base) {
      out.base = args.base;
    }
    if (args.detail) {
      out.detail = args.detail;
    }
    if (args.outline) {
      out.outline = args.outline;
    }
    if ((typeof args.opacity) === "number") {
      out.opacity = args.opacity;
    }
    if ((typeof args.pattern) === "number") {
      out.pattern = args.pattern;
    }
    if ((typeof args.shading) === "number") {
      out.shading = args.shading;
    }
    out.resize = new XY(args.resize||[1,1]);
    out.move = new XY(args.move||[0,0]);
    if (args.flip) {
      out.flip = args.flip;
    }
    return out;
  }

  toJSON(): {
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
  } {
    let out: {
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
    } = {
      part:this.part,
      index:this.index
    };
    if (this.base) {
      out.base = this.base;
    }
    if (this.detail) {
      out.detail = this.detail;
    }
    if (this.outline) {
      out.outline = this.outline;
    }
    if (this.opacity) {
      out.opacity = this.opacity;
    }
    if (this.pattern && this.pattern >= 0) {
      out.pattern = this.pattern;
    }
    if (this.shading && this.shading >= 0) {
      out.shading = this.shading;
    }
    if (this.resize) {
      out.resize = [this.resize.x, this.resize.y];
    }
    if (this.move) {
      out.move = [this.move.x, this.move.y];
    }
    if (this.flip) {
      out.flip = this.flip || false;
    }
    return out;
  }
}
