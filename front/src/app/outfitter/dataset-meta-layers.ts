export class DatasetMetaLayers {
  base?: string;
  detail?: string;
  outline: string;
  shadow?: string;

  constructor(args: {
    base?: string,
    detail?: string,
    outline: string,
    shadow?: string
  }) {
    if (args.base) {
      this.base = args.base;
    }
    if (args.detail) {
      this.detail = args.detail;
    }
    this.outline = args.outline;
    if (args.shadow) {
      this.shadow = args.shadow;
    }
  }
}
