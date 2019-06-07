import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {Trigger} from "../trigger"

@Component({
  selector: 'app-palettes-and-tiles',
  templateUrl: './palettes-and-tiles.component.html',
  styleUrls: ['./palettes-and-tiles.component.scss']
})
export class PalettesAndTilesComponent implements OnInit {

  @Input()
  state: any;

  private paletteAndTileForm: FormGroup = this.fb.group({
    selectedPalette:[''],
    paletteName:[''],
    selectedColor:[''],
    color:[''],
    makeTransparent:[false],
    tileName:[''],
    activeTile:[''],
    backgroundColor:['#fffffe']
  });

  trigger: Trigger = new Trigger("redraw-tile");

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}

  tileDialogCloser() {
    let form = this.paletteAndTileForm;
    return function() {
      form.patchValue({
        activeTile:form.value.tileName,
        tileName:''
      });
    }
  }

  tileAdder() {
    let form = this.paletteAndTileForm;
    let s = this.state;
    return function() {
      if (form.value.tileName && !s.tiles[form.value.tileName]) {
        s.tiles[form.value.tileName] = {};
      }
    }
  }

  paletteDialogCloser() {
    let form = this.paletteAndTileForm;
    return function() {
      form.patchValue({
        selectedPalette:form.value.paletteName,
        paletteName:''
      });
    }
  }

  paletteAdder() {
    let form = this.paletteAndTileForm;
    let s = this.state;
    return function() {
      if (form.value.paletteName && !s.palettes[form.value.paletteName]) {
        s.palettes[form.value.paletteName] = [];
      }
    }
  }

  selectPalette() {
    // todo
  }

  removePalette() {
    if (this.paletteAndTileForm.value.selectedPalette) {
      delete this.state.palettes[this.paletteAndTileForm.value.selectedPalette];
    }
  }

  selectColor() {
    // todo
  }

  setColor() {
    if (this.paletteAndTileForm.value.selectedPalette) {
      if (this.paletteAndTileForm.value.selectedColor) {
        this.state.palettes[this.paletteAndTileForm.value.selectedPalette][this.paletteAndTileForm.value.selectedColor] = this.paletteAndTileForm.value.color;
      }
    }
  }

  makeTransparent() {
    if (this.paletteAndTileForm.value.selectedPalette) {
      if (this.paletteAndTileForm.value.selectedColor) {
        this.state.palettes[this.paletteAndTileForm.value.selectedPalette][this.paletteAndTileForm.value.selectedColor] = null;
      }
    }
  }

  addColor() {
    if (this.paletteAndTileForm.value.selectedPalette) {
      this.state.palettes[this.paletteAndTileForm.value.selectedPalette].push(this.paletteAndTileForm.value.color);
    }
  }

  removeColor() {
    if (this.paletteAndTileForm.value.selectedPalette) {
      if (this.paletteAndTileForm.value.selectedColor) {
        this.state.palettes[this.paletteAndTileForm.value.selectedPalette].splice(this.paletteAndTileForm.value.selectedColor,1);
      }
    }
  }

  selectTile() {
    // todo
  }

  removeTile() {
    if (this.paletteAndTileForm.value.activeTile) {
      delete this.state.tiles[this.paletteAndTileForm.value.activeTile];
    }
  }

  setBackground() {
    // todo
  }
}
