import {SVG} from "../util/svg";
import {Mini} from "./mini";

export class MiniSVG {

  private static getXYoffset(index:number):number[] {
    let p = index % 20;
    return [490*(p%2),140*Math.floor(p/2)];
  }

  private static frame(index:number):string[] {
    let [xOff,yOff]:number[] = MiniSVG.getXYoffset(index);
    return [
      SVG.rect(xOff,yOff,35,140,{fill:"white",stroke:"black","stroke-width":"2"}),
      SVG.rect(xOff+455,yOff,35,140,{fill:"white",stroke:"black","stroke-width":"2"}),
      SVG.rect(xOff+35,yOff,210,140,{fill:"white",stroke:"black","stroke-width":"2"}),
      SVG.rect(xOff+245,yOff,210,140,{fill:"white",stroke:"black","stroke-width":"2"}),
    ];
  }

  private static pageFrames():string[] {
    return "?".repeat(20).split("").reduce((acc,q,i)=>{
      return acc.concat(MiniSVG.frame(i));
    },[]);
  }

  private static useImage(image:string,index:number):string[] {
    let [xOff,yOff]:number[] = MiniSVG.getXYoffset(index);
    return [
      SVG.use("#"+image,{transform:"matrix("+[0,-1,1,0,252+xOff,133+yOff].join(",")+")"}),
      SVG.use("#"+image,{transform:"matrix("+[0,-1,-1,0,238+xOff,133+yOff].join(",")+")"}),
    ];
  }

  private static page(isFirst:boolean,images:string[]):string {
    return `<div class="${isFirst?'firstPage':'page'}">${SVG.svg('7in','10in',{
      viewBox:"0 0 980 1400"
    },images.reduce((out,g,i):string[]=>{
      return out.concat(MiniSVG.useImage(g,i));
    },MiniSVG.pageFrames()))}</div>`;
  }

  private static nameImage(index:number):string {
    return "image" + (index<100?"0":"") + (index<10?"0":"") + index;
  }

  public static buildPageContents(minis:Mini[]):string[] {
    let refs:string[] = minis.reduce((acc,mini,i):string[]=>{
      return acc.concat("?".repeat(mini.count).split("").fill(MiniSVG.nameImage(i)));
    },[]);
    return "?".repeat(Math.ceil(refs.length/20)).split("").reduce((acc,q,i):string[]=>{
      acc.push(MiniSVG.page(i==0,refs.slice(i*20,(i+1)*20)));
      return acc;
    },[SVG.svg("0","0",{},[SVG.defs(minis.map((mini,i):string=>{
      return SVG.image(mini.url,126,189,{id:MiniSVG.nameImage(i)})
    }))])]);
  }
}
