import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Range } from "../../util/range";
import { Point } from "../../util/point";
import { Trigger } from "../../util/trigger";

@Component({
  selector: 'app-cobblestone-map',
  templateUrl: './cobblestone-map.component.html',
  styleUrls: ['./cobblestone-map.component.scss']
})
export class CobblestoneMapComponent implements OnInit {

  @Input()
  state: any;

  @Input()
  scale: number;



  dimForm: FormGroup = this.fb.group({
    width:[8],
    height:[10],
    scale:[3]
  });

  activeKey: string;

  range = Range;

  @Input()
  loadTrigger: Trigger;

  @Input()
  transformTrigger: Trigger;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  updateFromFile() {

  }

  select(key: string) {
    this.activeKey = key;
  }

  setTile(x:number,y:number) {
    let key = (new Point(x,y)).toString();
    if (this.state.map[key]) {
      delete this.state.map[key];
    } else {
      if (this.state.transforms[this.activeKey]) {
        this.state.map[key] = this.activeKey;
      }
    }
  }

  getTile(x:number,y:number) {
    let p = new Point(x,y);
    return this.state.map[p.toString()] || "bg";
  }

  pixel(key:string, x:number,y:number) {
    let tfTile = this.state.transforms[key];
    let palette = tfTile.palette;
    let tile = tfTile.tile;
    let p = (new Point(x,y)).toString();
    return palette[tile[p] || 0];
  }

  resize() {}
}
