import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {Trigger} from "../trigger";
import {Range} from "../range";

@Component({
  selector: 'app-spritely',
  templateUrl: './spritely.component.html',
  styleUrls: ['./spritely.component.scss']
})
export class SpritelyComponent implements OnInit {
  spritelyForm: FormGroup = this.fb.group({
    selectedPalette:[0],
    scale:[5],
    width:[16],
    height:[16],
    color:['#000001'],
    makeTransparent:[false],
    backgroundColor:['#fffffe']
  });

  palette: string[] = [undefined];

  pixels: {} = {};

  trigger: Trigger = new Trigger("redraw-pixels");

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  makeTransparent() {
    let t = this.spritelyForm.value.makeTransparent;
    console.log(t);
    this.palette[0] = t?undefined:this.spritelyForm.value.backgroundColor;
    console.log(this.palette);
    this.trigger.fire();
  }

  setBackground() {
    this.palette[0] = this.spritelyForm.value.backgroundColor;
    this.trigger.fire();
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
    this.palette.push(this.spritelyForm.value.color);
    this.spritelyForm.patchValue({selectedPalette:(this.palette.length-1)});
  }

  removeColor() {
    if (this.palette.length>1) {
      this.palette.splice(this.spritelyForm.value.selectedPalette,1);
      let len = this.palette.length;
      let pixels = this.pixels;
      Object.entries(pixels).forEach(entry => {
        if(entry[1] >= len) {
          delete pixels[entry[0]];
        }
      });
      this.spritelyForm.patchValue({
        selectedPalette:len - 1
      })
    }
    this.trigger.fire();
  }
}
