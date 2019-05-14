import { Injectable } from '@angular/core';
import {Cobblestone} from "./cobblestone";
import {CobblestoneMap} from "./cobblestone-map";
import {CharConfig} from "./char-config";
import {Tile} from "./tile";

@Injectable({
  providedIn: 'root'
})
export class CobblestoneService {

  state: Cobblestone;

  constructor() {
    this.state = new Cobblestone();
  }

  getMapNames(): string[] {
    return Array.from(this.state.maps.keys());
  }

  getMap(mapName: string): CobblestoneMap {
    return this.state.maps.get(mapName);
  }

  hasMap(mapName: string): boolean {
    return this.state.maps.has(mapName);
  }

  addMap(mapName: string) {
    this.state.maps.set(mapName, new CobblestoneMap());
  }

  getPaletteNames(): string[] {
    return Array.from(this.state.palettes.keys());
  }

  getPalette(paletteName: string): string[] {
    return this.state.palettes.get(paletteName);
  }

  hasPalette(paletteName: string): boolean {
    return this.state.palettes.has(paletteName);
  }

  addPalette(paletteName: string) {
    this.state.palettes.set(paletteName, []);
  }

  getTileNames(): string[] {
    return Array.from(this.state.tiles.keys());
  }

  getTile(tileName: string): Tile {
    return this.state.tiles.get(tileName);
  }

  hasTile(tileName: string): boolean {
    return this.state.tiles.has(tileName);
  }

  addTile(tileName: string) {
    this.state.tiles.set(tileName, new Tile());
  }

  getCharacters(): string[] {
    return Array.from(this.state.chars.keys());
  }

  getCharConfig(char: string): CharConfig {
    return this.state.chars.get(char);
  }

  hasCharacter(char: string): boolean {
    return this.state.chars.has(char);
  }

  addCharacter(char: string) {
    this.state.chars.set(char, new CharConfig());
  }
}
