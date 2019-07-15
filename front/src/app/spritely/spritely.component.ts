import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

import {Observable, of} from "rxjs";

import {Point} from "../util/point";
import {Range} from "../util/range";
import {Trigger} from "../util/trigger";

import {SpritelyData} from "./spritely-data";
import {SpritelyFileService} from "./spritely-file.service";
import {Transforms} from "./transform";
import {PixelPendingComponent} from "../util/pixel-pending/pixel-pending.component";

@Component({
  selector: 'app-spritely',
  templateUrl: './spritely.component.html',
  styleUrls: ['./spritely.component.scss']
})
export class SpritelyComponent implements OnInit {

  @ViewChild(PixelPendingComponent) pending: PixelPendingComponent;

  @ViewChild('colorPicker') colorInputRef: ElementRef;

  spritelyForm: FormGroup = this.fb.group({
    selectedPalette:[0],
    scale:[5],
    width:[16],
    height:[16],
    color:['#000001'],
    makeTransparent:[false],
    backgroundColor:['#fffffe'],
    imgFile:['']
  });

  palette: string[] = [undefined];

  pixels: {} = {};

  trigger: Trigger = new Trigger("redraw-pixels");

  defaultSaveFile: string;

  colorInput: HTMLInputElement;

  startingColors: string[] = ["#000000","#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff","#ffffff"];

  constructor(private fb: FormBuilder, private sfs: SpritelyFileService) { }

  ngOnInit() {
    this.colorInput = this.colorInputRef.nativeElement as HTMLInputElement;
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
    }
  }

  saveData(): any {
    return {
      pixels:this.pixels,
      palette:this.palette,
      width:this.spritelyForm.value.width,
      height:this.spritelyForm.value.height
    };
  }

  dataDownloader() {
    let me = this;
    return function(filename) {
      me.pending.block();
      me.sfs.downloaddata(me.saveData(),filename,
      () => { me.pending.complete(); });
    }
  }

  downloadImage() {
    this.pending.block();
    this.sfs.downloadImage(this.saveData(),
      this.spritelyForm.value.scale,
      this.spritelyForm.value.imgFile,
      () => { this.pending.complete(); });
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

  colorSetter() {
    let me = this;
    return function(index) {
      me.spritelyForm.patchValue({
        selectedPalette:index
      });
      me.selectColor();
      me.colorInput.click();
    }
  }

  makeTransparent() {
    let t = this.spritelyForm.value.makeTransparent;
    this.palette[0] = t?undefined:this.spritelyForm.value.backgroundColor;
  }

  setBackground() {
    this.palette[0] = this.spritelyForm.value.backgroundColor;
  }

  setColor() {
    this.palette[this.spritelyForm.value.selectedPalette] = this.spritelyForm.value.color;
  }

  addColor() {
    this.palette.push(this.startingColors[(this.palette.length % this.startingColors.length)]);
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
