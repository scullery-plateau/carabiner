import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {Trigger} from "../trigger";

@Component({
  selector: 'app-spritely',
  templateUrl: './spritely.component.html',
  styleUrls: ['./spritely.component.scss']
})
export class SpritelyComponent implements OnInit {
  spritelyForm: FormGroup = this.fb.group({
    selectedPalette:[0],
    scale:[5],
    color:['#000001'],
    backgroundColor:['#fffffe']
  });

  palette: string[] = [undefined];

  private static coords: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  pixels: number[][] = SpritelyComponent.coords.map(y => {
    return SpritelyComponent.coords.map(x => {
      return 0;
    })
  });

  trigger: Trigger = new Trigger("redraw-pixels");

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  setColor() {
    this.palette[this.spritelyForm.value.selectedPalette] = this.spritelyForm.value.color;
    this.trigger.fire();
  }

  setColorAsTransparent() {
    this.palette[this.spritelyForm.value.selectedPalette] = undefined;
    this.trigger.fire();
  }

  addColor() {
    this.palette.push(undefined);
    this.spritelyForm.patchValue({selectedPalette:(this.palette.length-1)});
  }

  removeColor() {
    if (this.palette.length>1) {
      this.palette.splice(this.spritelyForm.value.selectedPalette,1);
      let len = this.palette.length;
      this.pixels.forEach(row => {
        row.forEach((p,x) => {
          if(row[x] >= len) {
            row[x] = 0;
          }
        })
      });
      this.spritelyForm.patchValue({
        selectedPalette:len - 1
      })
    }
    this.trigger.fire();
  }
}
