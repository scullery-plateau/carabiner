import { Component, OnInit } from '@angular/core';
import {CobblestoneService} from "../cobblestone.service";

@Component({
  selector: 'app-palettes',
  templateUrl: './palettes.component.html',
  styleUrls: ['./palettes.component.scss']
})
export class PalettesComponent implements OnInit {

  private selectedPalette: string;

  private selectedColorIndex: number;

  constructor(private cobbleStoneService: CobblestoneService) { }

  ngOnInit() {
  }

  getService(): CobblestoneService {
    return this.cobbleStoneService;
  }

  addPalette() {
    const paletteName = prompt("Enter the name for the new palette");
    if (paletteName) {
      if (!this.getService().hasPalette(paletteName)) {
        this.getService().addPalette("" + paletteName);
        this.selectPalette(paletteName);
      }
    }
  }

  selectPalette(paletteName: string) {
    this.selectedPalette = paletteName;
  }

  selectColor(colorIndex: number) {
    this.selectedColorIndex = colorIndex;
  }

  addColor() {
    this.getService().getPalette(this.selectedPalette).push()
  }

}
