import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Range } from "../range";
import { Point } from "../point";

@Component({
  selector: 'app-cobblestone-map',
  templateUrl: './cobblestone-map.component.html',
  styleUrls: ['./cobblestone-map.component.scss']
})
export class CobblestoneMapComponent implements OnInit {

  @Input()
  state: any;

  dimForm: FormGroup = this.fb.group({
    width:[8],
    height:[10],
    scale:[3]
  })

  activeKey: string;

  range = Range;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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

  resize() {}
}
