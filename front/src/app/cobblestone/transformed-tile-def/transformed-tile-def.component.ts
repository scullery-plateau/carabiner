import {Component, Input, OnInit} from '@angular/core';
import {TransformedTile} from "../model/TransformedTile";
import {Range} from "../../util/range";
import {Trigger} from "../../util/trigger";
import {Point} from "../../util/point";
import {TileTransformerService} from "../tile-transformer.service";

@Component({
  selector: 'tf-tile-def',
  templateUrl: './transformed-tile-def.component.html',
  styleUrls: ['./transformed-tile-def.component.scss']
})
export class TransformedTileDefComponent implements OnInit {

  @Input()
  state: any;

  @Input()
  transformTrigger: Trigger;

  currentTransforms: {
    key:string,
    bg?:string,
    pixels:{
      x:number,
      y:number,
      fill:string
    }[]
  }[] = [];


  constructor(private ttf :TileTransformerService) { }

  ngOnInit() {
    let me = this;
    this.transformTrigger.addListener(() => {
      me.updateTransforms();
    })
  }

  updateTransforms() {
    this.currentTransforms = [];
    this.state.transforms.forEach((v:string,k:string) => {
      let tf:any = this.ttf.buildTransformedTile(this.state,k);
      if (tf) {
        this.currentTransforms.push(tf);
      }
    });
  }
}
