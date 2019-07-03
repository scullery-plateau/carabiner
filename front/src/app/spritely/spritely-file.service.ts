import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {SpritelyData} from "./spritely-data";
import {HttpClient} from "@angular/common/http";
import {DownloadLink} from "../util/download-link";

@Injectable({
  providedIn: 'root'
})
export class SpritelyFileService {

  imgPath: string = "/spritely/saveimg?";
  dataPath: string = "/spritely/savedata?";

  downloader: DownloadLink = new DownloadLink();

  constructor(private client: HttpClient) { }

  parseLoadData(loadData: string): Observable<SpritelyData> {
    return this.client.post<SpritelyData>("/spritely/load",loadData);
  }

  compressSaveData(saveData: SpritelyData): Observable<String> {
    return this.client.post<String>("/spritely/save",saveData);
  }

  downloadImage(saveData: SpritelyData, scale: number, fileName: string): void {
    this.client.post<String>("/spritely/save",saveData).subscribe((base64) => {
      let args: any = {
        base64:base64,
        filename:fileName,
        scale:scale
      };
      this.downloader.setFileName(fileName);
      this.downloader.setPath(this.imgPath + (new URLSearchParams(args)).toString());
      this.downloader.invokeDownload();
    });
  }

  downloaddata(saveData: SpritelyData, fileName: string): void {
    this.client.post<String>("/spritely/save",saveData).subscribe((base64) => {
      let args: any = {
        base64:base64,
        filename:fileName,
      };
      this.downloader.setFileName(fileName);
      this.downloader.setPath(this.dataPath + (new URLSearchParams(args)).toString());
      this.downloader.invokeDownload();
    });
  }
}
