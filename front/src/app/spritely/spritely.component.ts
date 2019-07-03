import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

import {Observable, of} from "rxjs";

import {Point} from "../util/point";
import {Range} from "../util/range";
import {Trigger} from "../util/trigger";

import {SpritelyData} from "./spritely-data";
import {SpritelyFileService} from "./spritely-file.service";
import {Transforms} from "./transform";

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
    backgroundColor:['#fffffe'],
    saveFile:[''],
    imgFile:['']
  });

  palette: string[] = [undefined];

  pixels: {} = {};

  trigger: Trigger = new Trigger("redraw-pixels");

  defaultSaveFile: string;

  constructor(private fb: FormBuilder, private sfs: SpritelyFileService) { }

  ngOnInit() {
  }

  fileDataReader() {
    let me = this;
    return function(fileData): Observable<SpritelyData> {
      return me.sfs.parseLoadData(fileData);
    }
  }

  fileLoadCallback() {
    let me = this;
    return function(load) {
      me.palette = load.palette;
      me.pixels = load.pixels;
      let formValues: any = {
        width:load.width,
        height:load.height,
      };
      if (me.palette[0]) {
        formValues.makeTransparent = false;
        formValues.backgroundColor = me.palette[0];
      } else {
        formValues.makeTransparent = true;
      }
      if (me.palette.length > 1) {
        formValues.selectedPalette = 1;
        formValues.color = me.palette[1];
      }
      me.spritelyForm.patchValue(formValues);
      me.trigger.fire();
    }
  }

  saveDataCompiler() {
    let me = this;
    return function(): Observable<String> {
      return me.sfs.compressSaveData({
        pixels:me.pixels,
        palette:me.palette,
        width:me.spritelyForm.value.width,
        height:me.spritelyForm.value.height
      });
    }
  }

  saveRouteBuilder() {
    let me = this;
    return function(filename,base64): string {
      let args: any = {
        base64:base64,
      };
      if (filename) {
        args.filename = filename;
      }
      return "/spritely/savedata?" + (new URLSearchParams(args)).toString();
    }
  }

  selectColor() {
    this.spritelyForm.patchValue({
      color:this.palette[this.spritelyForm.value.selectedPalette]
    });
  }

  colorIndexSetter() {
    let me = this;
    return function(index) {
      me.spritelyForm.patchValue({
        selectedPalette:index
      });
      me.selectColor();
    }
  }

  makeTransparent() {
    let t = this.spritelyForm.value.makeTransparent;
    this.palette[0] = t?undefined:this.spritelyForm.value.backgroundColor;
    this.trigger.fire();
  }

  setBackground() {
    this.palette[0] = this.spritelyForm.value.backgroundColor;
    this.trigger.fire();
  }

  redraw() {
    this.trigger.fire();
  }

  setColor() {
    this.palette[this.spritelyForm.value.selectedPalette] = this.spritelyForm.value.color;
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

  transform(tf:Transforms) {
    let width = this.spritelyForm.value.width;
    let height = this.spritelyForm.value.height;
    let pixels = this.pixels;
    let entries = Object.entries(pixels);
    let transformed: {} = {};
    entries.forEach(function(entry: any[]){
      let p: string = entry[0];
      let newP: Point = Point.parse(p)[tf](width,height);
      if(newP.isIn(width,height)) {
        transformed[newP.toString()] = entry[1];
      }
      delete pixels[p];
    });
    Object.entries(transformed).forEach(function(entry:any[]){
      pixels[entry[0]] = entry[1];
    })
    this.trigger.fire();
  }

  min() {
    return Math.min.apply(Math,Array.from(arguments));
  }

  resize(){
    this.spritelyForm.patchValue({
      width:Math.min(64,Math.max(8,this.spritelyForm.value.width)),
      height:Math.min(64,Math.max(8,this.spritelyForm.value.height)),
    });
  }
}
