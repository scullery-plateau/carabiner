import { Component, OnInit } from '@angular/core';
import {Mini} from "../mastermold/mini";
import {OutfitterService} from "./outfitter.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-outfitter',
  templateUrl: './outfitter.component.html',
  styleUrls: ['./outfitter.component.scss']
})
export class OutfitterComponent implements OnInit {
  constructor(private os : OutfitterService, private sanitizer:DomSanitizer) { }

  processing: any;
  step: number = 0;
  maxStep: number = 5;
  ellipse: string = "";
  base64: string;
  fileName: string;

  ngOnInit() {
  }

  safeURL(base64: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64, " + base64);
  }

  stepAnimate() {
    let me = this;
    let animateStep = () => {
      me.step = (me.step + 1) % me.maxStep;
      me.ellipse = ".".repeat(me.step + 1);
      animateStep();
    };
    return animateStep;
  }

  loadSchematic(e) {
    let files = Array.from(e.target.files);
    if (files.length > 0) {
      let file : File = <File>files[0];
      this.fileName = file.name;
      this.base64 = undefined;
      let me = this;
      let reader = new FileReader();
      reader.onload = function() {
        me.processing = setTimeout(me.stepAnimate(), 1000);
        let data = reader.result.toString();
        console.log(data);
        me.os.loadSchematic(data).subscribe((base64) => {
          me.base64 = base64;
          clearTimeout(me.processing);
          me.processing = undefined;
          me.ellipse = "";
        });
      };
      reader.readAsText(file);
    }
  }
}
