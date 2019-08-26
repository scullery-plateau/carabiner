import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {Trigger} from "../../util/trigger";

@Component({
  selector: 'app-palettes-and-tiles',
  templateUrl: './palettes-and-tiles.component.html',
  styleUrls: ['./palettes-and-tiles.component.scss']
})
export class PalettesAndTilesComponent implements OnInit {

  @Input()
  state: any;

  @Input()
  scale: number;

  activePalette: string[];

  activeColorIndex: 0;

  activeTile: {};

  private paletteAndTileForm: FormGroup = this.fb.group({
    selectedPalette:[''],
    paletteName:[''],
    selectedColor:[''],
    color:['#000001'],
    makeTransparent:[false],
    tileName:[''],
    selectedTile:[''],
    backgroundColor:['#fffffe']
  });

  trigger: Trigger = new Trigger("redraw-tile");

  @Input()
  loadTrigger: Trigger;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    let me = this;
    this.loadTrigger.addListener(() => {
      me.updateFromFile();
    })
  }

  updateFromFile() {
    let patch: {} = {};
    let paletteNames = this.state.palettes.keys();
    if (paletteNames.length > 0) {
      patch["selectedPalette"] = paletteNames[0];
    }
    let tileNames = this.state.tiles.keys();
    if (tileNames.length > 0) {
      patch["selectedTile"] = tileNames[0];
    }
    this.paletteAndTileForm.patchValue(patch);
    this.selectPalette();
    this.selectTile();
  }

  tileDialogCloser() {
    let form = this.paletteAndTileForm;
    return function() {
      form.patchValue({
        tileName:''
      });
    }
  }

  tileAdder() {
    let me = this;
    return function() {
      if (me.paletteAndTileForm.value.tileName && !me.state.tiles[me.paletteAndTileForm.value.tileName]) {
        me.state.tiles[me.paletteAndTileForm.value.tileName] = {};
        me.paletteAndTileForm.patchValue({
          selectedTile:me.paletteAndTileForm.value.tileName
        });
        me.activeTile = me.state.tiles[me.paletteAndTileForm.value.tileName];
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
    let me = this;
    return function() {
      if (me.paletteAndTileForm.value.paletteName && !me.state.palettes[me.paletteAndTileForm.value.paletteName]) {
        me.state.palettes[me.paletteAndTileForm.value.paletteName] = [];
        me.paletteAndTileForm.patchValue({
          selectedPalette:me.paletteAndTileForm.value.paletteName
        });
        me.activePalette = me.state.palettes[me.paletteAndTileForm.value.paletteName];
      }
    }
  }

  selectPalette() {
    this.activePalette = this.state.palettes.get(this.paletteAndTileForm.value.selectedPalette);
  }

  removePalette() {
    if (this.activePalette) {
      delete this.state.palettes[this.paletteAndTileForm.value.selectedPalette];
      this.activePalette = undefined;
    }
  }

  selectColor() {
    if (this.activePalette) {
      this.activeColorIndex = this.paletteAndTileForm.value.selectedColor;
      this.paletteAndTileForm.patchValue({
        color:this.activePalette[this.activeColorIndex]
      });
    }
  }

  colorIndexSetter() {
    let me = this;
    return function(index) {
      me.paletteAndTileForm.patchValue({
        selectedColor:index,
      });
      me.selectColor();
    }
  }

  setColor() {
    if (this.activePalette) {
      if (this.activeColorIndex >= 0) {
        this.activePalette[this.activeColorIndex] = this.paletteAndTileForm.value.color;
      }
    }
  }

  makeTransparent() {
    if (this.activePalette) {
      if (this.activeColorIndex >= 0) {
        this.activePalette[this.activeColorIndex] = null;
      }
    }
  }

  addColor() {
    if (this.activePalette) {
      this.activePalette.push(this.paletteAndTileForm.value.color);
      this.paletteAndTileForm.patchValue({
        selectedColor:(this.activePalette.length - 1)
      })
      this.selectColor();
    }
  }

  removeColor() {
    if (this.activePalette) {
      if (this.activeColorIndex >= 0) {
        this.activePalette.splice(this.activeColorIndex,1);
      }
    }
  }

  selectTile() {
    this.activeTile = this.state.tiles.get(this.paletteAndTileForm.value.selectedTile);
  }

  removeTile() {
    if (this.activeTile) {
      delete this.state.tiles[this.paletteAndTileForm.value.selectedTile];
    }
  }

  getBackground() {
    if (this.activePalette && this.activePalette[0]) {
      return this.activePalette[0];
    }
    return this.paletteAndTileForm.value.backgroundColor;
  }
}
