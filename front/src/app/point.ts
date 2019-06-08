export class Point {
  x:number;
  y:number;

  constructor(x:number,y:number) {
    this.x = x;
    this.y = y;
  }

  isIn(width:number, height:number) {
    return (this.x >= 0) && (this.x < width) && (this.y >= 0) && (this.y < height);
  }

  min(p:Point) {
    return new Point(Math.min(this.x,p.x),Math.min(this.y,p.y));
  }

  max(p:Point) {
    return new Point(Math.max(this.x,p.x),Math.max(this.y,p.y));
  }

  plus(p:Point) {
    return new Point(this.x+p.x,this.y+p.y);
  }

  minus(p:Point) {
    let min = this.min(p);
    let max = this.max(p);
    return new Point(max.x-min.x,max.y-min.y);
  }

  equals(p:Point) {
    return this.x == p.x && this.y == p.y;
  }

  toString() {
    return this.x + 'x' + this.y;
  }

  static parse(xy: string) {
    let p = xy.split("x").map(n => parseInt(n));
    return new Point(p[0],p[1]);
  }

  private turnLeft(width:number,height:number) {
    let dim = Math.min(width,height) - 1;
    return new Point(this.y,dim - this.x);
  }

  private turnRight(width:number,height:number) {
    let dim = Math.min(width,height) - 1;
    return new Point(dim - this.y,this.x);
  }

  private flipOver(width:number,height:number) {
    return new Point((width-1)-this.x,this.y);
  }

  private flipDown(width:number,height:number) {
    return new Point(this.x,(height-1)-this.y);
  }

  private shiftLeft(width:number,height:number) {
    return new Point(this.x-1,this.y);
  }

  private shiftRight(width:number,height:number) {
    return new Point(this.x+1,this.y);
  }

  private shiftUp(width:number,height:number) {
    return new Point(this.x,this.y-1);
  }

  private shiftDown(width:number,height:number) {
    return new Point(this.x,this.y+1);
  }
}
