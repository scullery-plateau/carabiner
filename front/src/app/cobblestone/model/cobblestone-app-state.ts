import {TransformedTile} from "./TransformedTile";
import {CobblestonePage} from "./cobblestone-page";
import {CobblestoneData} from "./cobblestone-data";

export class CobblestoneAppState {
  palettes:Map<string,string[]>;
  tiles:{};
  mapping:Map<string,TransformedTile>;
  transforms:Map<string,string>;
  map:{};
  paging:CobblestonePage[];
  
  public loadData(data: CobblestoneData) {
    ['palettes','tiles','mapping','map'].forEach((key) => {
      Object.entries(data[key]).forEach((entry) => {
        this[key][entry[0]] = entry[1];
      });
    });
    data.paging.forEach((page) => {
      this['paging'].push(page)
    });
    Object.entries(this['mapping']).forEach((entry) => {
      let myChar = entry[0];
      let mapping: TransformedTile = entry[1];
      mapping.transforms.sort();
      let key = mapping.toString();
      if (this['transforms'][key]) {
        let oldChar = this['transforms'][key];
        delete this['mapping'][oldChar];
      }
      this['transforms'][key] = myChar;
    });
  }
  
  public getData(): CobblestoneData {
    return {
      palettes:this['palettes'],
      tiles:this['tiles'],
      mapping:this['mapping'],
      map:this['map'],
      paging:this['paging'],
    };

  }
}
