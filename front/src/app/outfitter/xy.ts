export class XY {
  x: number;
  y: number;

  constructor([x, y]: number[]) {
    this.x = x;
    this.y = y;
  }

  static identityMultiplier(): XY {
    return new XY([1,1]);
  }

  static origin(): XY {
    return new XY([0,0]);
  }

  toJSON() {
    return [this.x, this.y];
  }

  plus(p: XY): XY {
    return new XY([this.x+p.x,this.y+p.y]);
  }

  minus(p: XY): XY {
    return new XY([this.x-p.x,this.y-p.y]);
  }

  times(p: XY): XY {
    return new XY([this.x*p.x,this.y*p.y]);
  }

  min(p: XY): XY {
    return new XY([Math.min(this.x,p.x),Math.min(this.y,p.y)]);
  }

  max(p: XY): XY {
    return new XY([Math.max(this.x,p.x),Math.max(this.y,p.y)]);
  }

  toString() {
    return `(${this.x},${this.y})`;
  }
}
