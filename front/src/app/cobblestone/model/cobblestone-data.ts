import {CobblestonePage} from "./cobblestone-page";
import {TransformedTile} from "./TransformedTile";

export class CobblestoneData {
  palettes:Map<string,string[]>;
  tiles:Map<string,Map<string,number>>;
  mapping:Map<string,{
    "palette-name"?:string,
    "tile-name"?:string,
    "transforms"?:string[]
  }>;
  map:Map<string,string>;
  paging:CobblestonePage[];
}
