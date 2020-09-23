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
}
