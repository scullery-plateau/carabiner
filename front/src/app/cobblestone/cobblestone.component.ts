import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Trigger } from "../util/trigger"
import {Observable} from "rxjs";
import {SpritelyData} from "../spritely/spritely-data";
import {CobblestoneFileService} from "./cobblestone-file.service";
import {CobblestoneData} from "./model/cobblestone-data";
import {TileTransformerService} from "./tile-transformer.service";
import {TransformedTile} from "./model/TransformedTile";
import {CobblestoneAppState} from "./model/cobblestone-app-state";

@Component({
  selector: 'app-cobblestone',
  templateUrl: './cobblestone.component.html',
  styleUrls: ['./cobblestone.component.scss']
})
export class CobblestoneComponent implements OnInit {

  private state: CobblestoneAppState = new CobblestoneAppState();

  loadTrigger: Trigger = new Trigger("on-file-load");

  transformTrigger: Trigger = new Trigger("on-transforms-updated");

  constructor(private fb: FormBuilder,
              private cfs: CobblestoneFileService,
              private ttf: TileTransformerService) { }

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
    return function(json:CobblestoneData) {
      me.state.loadData(json,me.ttf);
      me.loadTrigger.fire();
    }
  }

  saveData(): CobblestoneData {
    return this.state.getData();
  }

  dataDownloader() {
    let me = this;
    return function(filename) {
      me.cfs.downloaddata(me.saveData(),filename);
    }
  }

}
