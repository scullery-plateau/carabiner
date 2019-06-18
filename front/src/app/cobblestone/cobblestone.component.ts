import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Trigger } from "../util/trigger"

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
    map:{},
    pages:[]
  };

  defaultFileName: string;

  loadTrigger: Trigger = new Trigger("on-file-load");

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  saveDataCompiler() {
    let me = this;
    return function() {
      return JSON.stringify(me.state);
    }
  }

  fileLoadHandler(fileData) {
    return JSON.parse(fileData);
  }

  fileLoadCallback() {
    let me = this;
    return function(json) {
      ['palettes','tiles','transforms','map'].forEach((key) => {
        Object.entries(json[key]).forEach((entry) => {
          me.state[key][entry[0]] = entry[1];
        });
      });
      me.loadTrigger.fire();
    }
  }

  fileLoader() {
    var me = this;
    return function(fileData,fileName) {
      console.log("loading cobblestone file");
      me.defaultFileName = fileName;
      let json = JSON.parse(fileData);
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
