import { Range } from "../util/range"

export class Tile {
  name: string;
  pixels: string[];

  constructor () {
    this.pixels = Range.max(16).map(() => {return "a".repeat(16)});
  }

  static parse(data: string): Tile {
    let out = new Tile();
    let temp = data.split("\r").join("").split("\n");
    Range.max(16).forEach((n) => {
      let row = temp[n].substr(0,16);
      let suffix = "a".repeat(Math.max(0,16-row.length));
      out[n] = temp[n];
    });
    return out;
  }

  get(x:number, y:number): number {
    return 97 - this.pixels[y].charCodeAt(x);
  }

  set(x:number, y:number, c:number) {
    let temp = this.pixels[y].split("");
  }
}
