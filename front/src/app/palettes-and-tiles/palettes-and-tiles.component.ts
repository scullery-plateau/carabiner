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
  state: {};

  private paletteAndTileForm: FormGroup = this.fb.group({
    selectedPalette:[''],
    paletteName:[''],
    selectedColor:[''],
    color:[''],
    makeTransparent:[false],
    tileName:[''],
    activeTile:['']
  });

  trigger: Trigger = new Trigger("redraw-tile");

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    document.getElementById('tileNameDialog').addEventListener('closeDialog',function(e:CustomEvent) {
      if (e.detail.state == 'confirm') {
        this.addTile();
      }
      this.paletteAndTileForm.patchValue({
        tileName:''
      })
    });
    document.getElementById('paletteNameDialog').addEventListener('closeDialog',function(e:CustomEvent) {
      if (e.detail.state == 'confirm') {
        this.addPalette();
      }
      this.paletteAndTileForm.patchValue({
        paletteName:''
      })
    });
  }

  addPalette() {
    // todo
  }

  selectPalette() {
    // todo
  }

  removePalette() {
    // todo
  }

  selectColor() {
    // todo
  }

  setColor() {
    // todo
  }

  makeTransparent() {
    // todo
  }

  addColor() {
    // todo
  }

  removeColor() {
    // todo
  }

  addTile() {
    // todo
  }

  selectTile() {
    // todo
  }

  removeTile() {
    // todo
  }
}
