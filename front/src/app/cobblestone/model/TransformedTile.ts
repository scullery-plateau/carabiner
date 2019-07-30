import {Transform} from "./transform";

export class TransformedTile {
  paletteName:string;
  tileName:string;
  transforms:Transform[];

  public static parse(key: string): TransformedTile {
    let out = new TransformedTile();
    let fields = key.split("_");
    out.tileName = fields[0];
    out.paletteName = fields[1];
    return out;
  }

  public toString(): string {
    this.transforms = this.transforms = [];
    var tfs = Object.values(Transform).filter((tf) => {
      return this.transforms.indexOf(tf) >= 0;
    });
    tfs.sort();
    return [this.tileName,this.paletteName].concat(tfs).join("_");
  }
}
