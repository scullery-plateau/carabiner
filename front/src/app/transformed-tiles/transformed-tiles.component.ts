import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-transformed-tiles',
  templateUrl: './transformed-tiles.component.html',
  styleUrls: ['./transformed-tiles.component.scss']
})
export class TransformedTilesComponent implements OnInit {

  @Input()
  state: any;

  transForm: FormGroup = this.fb.group({
    selectedPalette:[''],
    activeTile:[''],
    flipOver:[''],
    flipDown:[''],
    turnRight:[''],
    turnLeft:['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  static tfLabels = ["flipOver", "flipDown", "turnRight", "turnLeft"];

  currentKey() {
    let palette = this.state.palettes[this.transForm.value.selectedPalette];
    if (palette) {
      let tile = this.state.tiles[this.transForm.value.activeTile];
      if (tile) {
        let values = this.transForm.value;
        var tfs = TransformedTilesComponent.tfLabels.map((label) => {
          return values[label];
        }).filter((tf) => {
          return tf.length > 0;
        });
        tfs.sort();
        return [tile,palette].concat(tfs).join("_");
      }
    }
  }

  exists() {
    let key = this.currentKey();
    if (key) {
      return this.state.transforms[key];
    }
  }

  toggle() {
    let key = this.currentKey();
    if (key) {
      delete this.state.transforms[key];
    } else {
      this.state.transforms[key] = [];
    }
  }

}
