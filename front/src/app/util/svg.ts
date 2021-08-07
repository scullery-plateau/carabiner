export class SVG {
  private static attrs(attrs:{}):string {
    return Object.entries(attrs).map(([key, value]) => {
      return key + '="' + (value as string) + '"';
    }).join(" ");
  }

  public static svg(width:string, height:string, args:{
    viewBox?:string
  },contents:string[]): string {
    return `<svg width="${width}" height="${height}" ${SVG.attrs(args)}>${contents.join('\n')}</svg>`;
  }

  public static rect(x:number,y:number,width:number,height:number,style:{
    fill?:string,
    stroke?:string,
    "stroke-width"?:string
  }): string {
    return `<rect x="${x}" y="${y}" width="${width}" height="${height}" ${SVG.attrs(style)}></rect>`;
  }

  public static group(style:{
    transform?:string,
    opacity?:string,
    fill?:string,
    stroke?:string,
    "stroke-width"?:string
  },contents:string[]): string {
    return `<g ${SVG.attrs(style)}>${contents.join('\n')}</g>`;
  }

  public static anchor(href:string, style:{
    onclick?:string
  },contents:string[]): string {
    return `<a href="${href}" ${SVG.attrs(style)}>${contents.join('\n')}</a>`;
  }

  public static use(ref:string, style:{
    fill?:string,
    stroke?:string,
    "stroke-width"?:string
  }): string {
    return `<use xlink:href="${ref}" ${SVG.attrs(style)}></use>`;
  }

  public static image(href:string, width: string, height: string) {
    return `<image href="${href}" width="${width}" height="${height}"></image>`;
  }
}
