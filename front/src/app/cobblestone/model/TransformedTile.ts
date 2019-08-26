import {Transform} from "./transform";

export class TransformedTile {
  paletteName:string;
  tileName:string;
  transformations:string[];

  unparse(): string {
    var tfs = Object.values(Transform).filter((tf) => {
      return this.transformations.indexOf(tf) >= 0;
    });
    tfs.sort();
    return [this.tileName,this.paletteName].concat(tfs).join("_");
  }

  static parse(key: string): TransformedTile {
    let out = new TransformedTile();
    let fields = key.split("_");
    out.tileName = fields[0];
    out.paletteName = fields[1];
    let tfs = fields.splice(2);
    out.transformations = Object.values(Transform).filter((tf) => {
      return tfs.indexOf(tf) >= 0;
    });
    return out;
  }
}
