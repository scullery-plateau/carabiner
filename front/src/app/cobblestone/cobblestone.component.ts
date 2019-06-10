import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {CobblestoneService} from "../cobblestone.service";
import { Trigger } from "../trigger"

@Component({
  selector: 'app-cobblestone',
  templateUrl: './cobblestone.component.html',
  styleUrls: ['./cobblestone.component.scss']
})
export class CobblestoneComponent implements OnInit {

  private state: {} = {
    palettes:{},
    tiles:{},
    transforms:{},
    map:{}
  };

  defaultFileName: string;

  loadTrigger: Trigger = new Trigger("on-file-load");

  constructor(private fb: FormBuilder, private cobblestoneService: CobblestoneService) { }

  ngOnInit() {
  }

  compileSaveData() {
    return JSON.stringify(this.state);
  }

  fileLoader() {
    var me = this;
    return function(fileData,fileName) {
      console.log("loading cobblestone file");
      me.defaultFileName = fileName;
      let json = JSON.parse(fileData);
      console.log(json);
      ['palettes','tiles','transforms','map'].forEach((key) => {
        Object.entries(json[key]).forEach((entry) => {
          me.state[key][entry[0]] = entry[1];
        });
      });
      console.log(me.state);
      me.loadTrigger.fire();
    }
  }

}
