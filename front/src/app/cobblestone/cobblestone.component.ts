import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Trigger } from "../util/trigger"
import {Observable} from "rxjs";
import {SpritelyData} from "../spritely/spritely-data";
import {CobblestoneFileService} from "./cobblestone-file.service";
import {CobblestoneData} from "./model/cobblestone-data";

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
    mapping:{},
    map:{},
    paging:[]
  };

  defaultFileName: string;

  loadTrigger: Trigger = new Trigger("on-file-load");

  constructor(private fb: FormBuilder, private cfs: CobblestoneFileService) { }

  ngOnInit() {
  }

  fileLoadHandler() {
    let me = this;
    return function(fileData): Observable<CobblestoneData> {
      return me.cfs.parseLoadData(fileData);
    }
  }

  fileLoadCallback() {
    let me = this;
    return function(json) {
      ['palettes','tiles','mapping','map'].forEach((key) => {
        Object.entries(json[key]).forEach((entry) => {
          me.state[key][entry[0]] = entry[1];
        });
      });
      json.paging.forEach((page) => {
        me.state['paging'].push(page)
      });
      me.loadTrigger.fire();
    }
  }

  saveData(): any {
    return {
      palettes:this.state['palettes'],
      tiles:this.state['tiles'],
      mapping:this.state['mapping'],
      map:this.state['map'],
      paging:this.state['paging'],
    };
  }

  dataDownloader() {
    let me = this;
    return function(filename) {
      me.cfs.downloaddata(me.saveData(),filename);
    }
  }

}
