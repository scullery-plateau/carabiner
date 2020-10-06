export class XY {
  x: number;
  y: number;

  constructor([x, y]: number[]) {
    this.x = x;
    this.y = y;
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
    return new XY([this.x-p.x,this.y-p.y]);
  }

  max(p: XY): XY {
    return new XY([this.x-p.x,this.y-p.y]);
  }
}
