export class Range {
  public static max(max: number): number[] {
    return Range.minmax(0,max);
  }

  public static minmax(min: number, max: number): number[] {
    return Range.minmaxstep(min, max, 1);
  }

  public static minmaxstep(min: number, max: number, step: number): number[] {
    let out: number[] = [];
    for (let x = min; x < max; x += step) {
      out.push(x);
    }
    return out;
  }
}
