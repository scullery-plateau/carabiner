import {CobblestonePage} from "./cobblestone-page";
import {TransformedTile} from "./TransformedTile";

export class CobblestoneData {
  palettes:Map<string,string[]>;
  tiles:{};
  mapping:Map<string,TransformedTile>;
  map:{};
  paging:CobblestonePage[];
}
