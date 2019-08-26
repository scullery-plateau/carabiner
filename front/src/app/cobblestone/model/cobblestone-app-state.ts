import {TransformedTile} from "./TransformedTile";
import {CobblestonePage} from "./cobblestone-page";
import {CobblestoneData} from "./cobblestone-data";
import {TileTransformerService} from "../tile-transformer.service";
import {Transform} from "./transform";

export class CobblestoneAppState {
  palettes:Map<string,string[]> = new Map<string, string[]>();
  tiles:Map<string,Map<string,number>> = new Map<string, Map<string, number>>()
  mapping:Map<string,TransformedTile> = new Map<string, TransformedTile>();
  transforms:Map<string,string> = new Map<string, string>();
  map:Map<string,string> = new Map<string, string>();
  paging:CobblestonePage[] = [];

  public loadData(data: CobblestoneData, ttf: TileTransformerService) {
    console.log(data);
    this.palettes = new Map<string, string[]>();
    Object.entries(data.palettes).forEach((entry) => {
      this.palettes.set(entry[0],entry[1]);
    });
    this.tiles = new Map<string, Map<string, number>>();
    Object.entries(data.tiles).forEach((entry) => {
      this.tiles.set(entry[0],entry[1]);
    });
    this.mapping = new Map<string, TransformedTile>();
    Object.entries(data.mapping).forEach((entry) => {
      let tfTile: TransformedTile = new TransformedTile();
      tfTile.tileName = entry[1]["tile-name"];
      tfTile.paletteName = entry[1]["palette-name"];
      console.log(entry);
      let tfs = entry[1]["transforms"] || [];
      console.log(tfs);
      tfTile.transformations = Object.values(Transform).filter((tf:string) => {
        return tfs.indexOf(tf) >= 0;
      });
      console.log(tfTile.transformations);
      console.log(tfTile);
      console.log(tfTile.unparse());
      this.mapping.set(entry[0],tfTile);
    });
    this.map = new Map<string, string>();
    Object.entries(data.map).forEach((entry) => {
      this.map.set(entry[0],entry[1]);
    });
    this.paging = [];
    data.paging.forEach((page) => {
      this.paging.push(page)
    });
    this.mapping.forEach((mapping:TransformedTile,myChar:string) => {
      mapping.transformations.sort();
      let key = ttf.parseMappingToKey(mapping);
      if (this.transforms.has(key)) {
        let oldChar = this.transforms.get(key);
        this.mapping.delete(oldChar);
      }
      this.transforms.set(key,myChar);
    });
    console.log(this);
  }

  public getData(): CobblestoneData {
    let data: CobblestoneData = new CobblestoneData();
    data.paging = this.paging;
    data.palettes = this.palettes;
    data.tiles = this.tiles;
    data.map = this.map;
    data.mapping = new Map<string, {"palette-name"?: string, "tile-name"?: string, transforms?: string[]}>();
    this.mapping.forEach((tfTile:TransformedTile,myChar:string) => {
      data.mapping.set(myChar,{
        "palette-name":tfTile.paletteName,
        "tile-name":tfTile.tileName,
        "transforms":tfTile.transformations.map((tf) => tf)
      });
    });
    return data;
  }
}
