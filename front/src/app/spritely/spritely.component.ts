import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {Trigger} from "../trigger";
import {Range} from "../range";
import {DomSanitizer} from '@angular/platform-browser';
import {Transforms} from "./transform";
import {Point} from "../point"

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

  saveFileContent: any;

  constructor(private fb: FormBuilder, private sanitizer:DomSanitizer, ) { }

  ngOnInit() {
    this.trigger.addListener(e => {
      this.compileSaveData();
    });
  }

  private loadFileData(fileData,fileName) {
    let rows = fileData.split("\r").join("").split("\n").join("|").split("|");
    let filePalette = rows.shift().split(",");
    this.palette.splice(0,this.palette.length);
    filePalette.forEach(c => this.palette.push((c == "none")?undefined:c));
    Object.keys(this.pixels).forEach(p => {
      delete this.pixels[p];
    })
    let width = 0;
    rows.forEach((row,y) => {
      width = Math.max(width,row.length);
      row.split("").forEach((p,x) => {
        let c = p.charCodeAt(0) - 97;
        if (c > 0) {
          let key = x + 'x' + y;
          this.pixels[key] = c;
        }
      });
    });
    let formValues: any = {
      width:width,
      height:rows.length,
      saveFile:fileName,
    };
    if (this.palette[0]) {
      formValues.makeTransparent = false;
      formValues.backgroundColor = this.palette[0];
    } else {
      formValues.makeTransparent = true;
    }
    if (this.palette.length > 1) {
      formValues.selectedPalette = 1;
      formValues.color = this.palette[1];
    }
    this.spritelyForm.patchValue(formValues);
    this.trigger.fire();
  }

  loadFile($event) : void {
    let inputValue = $event.target;
    let file:File = inputValue.files[0];
    let myReader:FileReader = new FileReader();
    let loadData = this.loadFileData;
    let me = this;
    myReader.onload = function(e){
      // you can perform an action with readed data here
      loadData.call(me, myReader.result,file.name);
    }
    myReader.readAsText(file);
  }

  compileSaveData() {
    let out = [this.palette.map(c => c?c:"none").join(",")];
    Range.max(this.spritelyForm.value.height).forEach(y => {
      let row = [];
      Range.max(this.spritelyForm.value.width).forEach(x => {
        let key = x + 'x' + y;
        let c = this.pixels[key] || 0;
        row.push(c);
      })
      let charCodes = row.map((c:number) => (parseInt(c) + 97));
      out.push(String.fromCharCode.apply(null,charCodes));
    });
    let data = out.join("\r\n");
    this.saveFileContent = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(new Blob([data], {type: 'text/plain'})));
  }

  selectColor() {
    this.spritelyForm.patchValue({
      color:this.palette[this.spritelyForm.value.selectedPalette]
    });
  }

  setColorIndex(index: number) {
    this.spritelyForm.patchValue({
      selectedPalette:index
    });
    this.selectColor();
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
}
