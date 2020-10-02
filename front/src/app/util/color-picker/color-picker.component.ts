import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {COLORS} from "../colors";

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  @ViewChild('myDialog') dialogRef: ElementRef;

  @Input()
  initValue: string;

  @Output()
  retVal: EventEmitter<string> = new EventEmitter<string>();

  colors:{} = COLORS;
  invertedColors:{};

  dialog: HTMLDialogElement;

  constructor(private fb: FormBuilder) {
    this.invertedColors = {};
    Object.keys(this.colors).forEach((key) => {
      this.invertedColors[this.colors[key]] = key;
    });
  }

  colorForm: FormGroup = this.fb.group({
    value:[''],
    name:[''],
    red:[127],
    green:[127],
    blue:[127]
  });

  selectedValue: string;

  ngOnInit() {
    this.dialog = this.dialogRef.nativeElement as HTMLDialogElement;
    this.applyColor(this.initValue);
  }

  range(n: number) {
    return "?".repeat(n).split('').map((c,i) => i);
  }

  hexFromRGB(r:number,g:number,b:number): string {
    return '#' + [r,g,b].map((c) => {
      let h = Number(c).toString(16);
      if (h.length === 1) {
        h = '0' + h;
      }
      return h;
    }).join('');
  }

  rgbFromHex(hex: string) : {} {
    let rgb = [1,3,5].map((i) => parseInt(hex.substr(i,2),16));
    return {
      red: rgb[0],
      green: rgb[1],
      blue: rgb[2]
    };
  }

  hexFromXY(x: number, y: number): string {
    let r = ((3 * Math.floor(y/6)) + Math.floor(x/6)) * 3;
    let g = (x % 6) * 3;
    let b = (y % 6) * 3;
    return this.hexFromRGB(r,g,b);
  }

  private getColorType(color: string): string {
    if (this.colors[color]) {
      return "name";
    }
    if (/[#]([0-9a-f]{6})/i.exec(color)[0] == color) {
      return "hex";
    }
    return;
  }

  applyName(name:string) {
    let hex = this.colors[name];
    let rgb = this.rgbFromHex(hex);
    this.colorForm.patchValue({name:name,value:name});
    this.colorForm.patchValue(rgb);
    this.selectedValue = name;
  }

  applyHex(hex:string) {
    let rgb = this.rgbFromHex(hex);
    let name = this.invertedColors[hex];
    this.colorForm.patchValue({name:name,value:hex});
    this.colorForm.patchValue(rgb);
    this.selectedValue = hex;
  }

  applyColor(color:string) {
    switch (this.getColorType(color)) {
      case "name":
        this.applyName(color);
        break;
      case "hex":
        this.applyHex(color);
        break;
    }
  }

  setColor() {
    this.applyColor(this.colorForm.value.value);
  }

  setNamed() {
    this.applyName(this.colorForm.value.name);
  }

  setRGB(hex: string) {
    this.applyHex(hex);
  }

  setColorFromRGB() {
    let rgb = this.colorForm.value
    this.applyHex(this.hexFromRGB(rgb.red,rgb.green,rgb.blue));
  }

  open() {
    this.dialog.showModal();
  }

  cancel() {
    this.dialog.close();
  }

  confirm() {
    this.retVal.emit(this.selectedValue);
    this.dialog.close();
  }

  getForegroundColor(hex: string) {
    let rgb = this.rgbFromHex(hex);
    let luminosity = Math.sqrt(Math.pow(rgb["red"], 2) * 0.299 + Math.pow(rgb["green"], 2) * 0.587 + Math.pow(rgb["blue"], 2) * 0.114);
    return luminosity > 186 ? "black" : "white";
  }
}
