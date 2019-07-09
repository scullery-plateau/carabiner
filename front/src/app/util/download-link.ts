export class DownloadLink {
  private link: any;

  constructor() {
    this.link = document.createElement("a");
    this.link.target = "_blank";
  }

  setFileName(fileName: string) {
    //this.link.download = fileName;
  }

  setPath(href: string) {
    this.link.href = href;
  }

  invokeDownload() {
    if (this.link.href) {
      this.link.click();
    }
  }
}
