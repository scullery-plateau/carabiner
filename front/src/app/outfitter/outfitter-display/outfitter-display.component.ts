import {Component, Input, OnInit} from '@angular/core';
import {Schematic} from "../schematic";
import {DatasetMeta} from "../dataset-meta";
import {XY} from "../xy";
import {SCALES} from "../scales";
import {DatasetMetaPart} from "../dataset-meta-part";
import {SVG} from "../../util/svg";
import {isNumber} from "util";

@Component({
  selector: 'outfitter-display',
  templateUrl: './outfitter-display.component.html',
  styleUrls: ['./outfitter-display.component.scss']
})
export class OutfitterDisplayComponent implements OnInit {

  @Input()
  schematic: Schematic;

  @Input()
  meta: DatasetMeta;

  constructor() { }

  ngOnInit() {

  }

  buildSVG(schematic: Schematic, meta: DatasetMeta) {
    let min = new XY([0,0]);
    let max = new XY([0,0]);
    let contents: string[] = [];
    schematic.layers.forEach((layer) => {
      let part: DatasetMetaPart = meta.parts.get(layer.part)[layer.index];
      let flip: XY = layer.resize.times(new XY([(layer.flip?-1.0:1.0),1.0]));
      min = min.min(part.min.times(flip).plus(layer.move));
      max = max.max(part.max.times(flip).plus(layer.move));
      let group: string[] = [];
      if (part.layers.base) {
        group.push(SVG.use('#'+part.layers.base,{fill:(layer.base || 'white')}))
      }
      if (part.layers.detail) {
        group.push(SVG.use('#'+part.layers.detail,{fill:(layer.detail || 'white')}))
      }
      if (isNumber(layer.pattern) && layer.pattern >= 0) {
        let pattern: string[] = [];
        if (part.layers.base) {
          pattern.push(SVG.use('#'+part.layers.base,{}))
        }
        if (part.layers.detail) {
          pattern.push(SVG.use('#'+part.layers.detail,{}))
        }
        if (pattern.length > 0) {
          group.push(SVG.group({
            fill:`url(#patterns-${layer.pattern>=10?'':'0'}${layer.pattern})`
          },pattern));
        }
      }
      if (isNumber(layer.shading) && layer.shading >= 0) {
        let shading: string[] = [];
        if (part.layers.base) {
          shading.push(SVG.use('#'+part.layers.base,{}))
        }
        if (part.layers.detail) {
          shading.push(SVG.use('#'+part.layers.detail,{}))
        }
        if (shading.length > 0) {
          group.push(SVG.group({fill:`url(#shading-${layer.shading>=10?'':'0'}${layer.shading})`},shading));
        }
      }
      if (part.layers.outline) {
        group.push(SVG.use('#'+part.layers.outline,{stroke:(layer.outline || 'black')}))
      }
      if (part.layers.shadow) {
        group.push(SVG.use('#'+part.layers.shadow,{}))
      }
      contents.push(SVG.group({
        transform:`matrix(${flip.x},0.0,0.0,${flip.y},${layer.move.x},${layer.move.y})`,
        opacity:`${layer.opacity || 1.0}`
      },group))
    });
    let bodyScale = new XY(SCALES[schematic.bodyScale] || [1.0, 1.0]);
    min = min.times(bodyScale);
    max = max.times(bodyScale);
    let halfWidth = Math.max(Math.abs(max.x), Math.abs(min.x));
    min = new XY([-1*halfWidth,min.y]);
    max = new XY([halfWidth,max.y]);
    let padding = new XY([10,10]);
    min = min.minus(padding);
    max = max.plus(padding);
    let width = max.x-min.x;
    let height = max.y-min.y;
    let frame: string[] = [];
    if (schematic.bgColor) {
      frame.push(SVG.rect(min.x,min.y,width,height,{
        stroke:'none',
        fill:schematic.bgColor
      }));
    }
    if (schematic.bgPattern) {
      frame.push(SVG.rect(min.x,min.y,width,height,{
        stroke:'none',
        fill:`url(#pattern_${schematic.bgPattern>=10?'':'0'}${schematic.bgPattern})`
      }));
    }
    frame.push(SVG.group({
      transform:`matrix(${bodyScale.x},0.0,0.0,${bodyScale.y},0.0,0.0)`
    },contents))
    return SVG.svg("100%","100%",{
      viewBox:[min.x,min.y,width,height].join(" ")
    },frame);
  }
}
