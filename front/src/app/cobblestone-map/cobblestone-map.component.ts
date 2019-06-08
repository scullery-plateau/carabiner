import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Range } from "../range";

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
    if (this.state.transforms[this.activeKey]) {

    }
  }

  getTile(x:number,y:number) {
    return "bg";
  }

  resize() {}

}
