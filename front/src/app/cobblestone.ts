import {CobblestoneMap} from "./cobblestone-map";
import {Tile} from "./tile";
import {CharConfig} from "./char-config";

export class Cobblestone {
  maps:Map<string,CobblestoneMap> = new Map<string, CobblestoneMap>();
  palettes:Map<string,string[]> = new Map<string, string[]>();
  tiles:Map<string,Tile> = new Map<string, Tile>();
  chars:Map<string,CharConfig> = new Map<string, CharConfig>();
}
