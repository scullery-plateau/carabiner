import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {SpritelyData} from "./spritely-data";
import {HttpClient} from "@angular/common/http";
import {DownloadLink} from "../util/download-link";

@Injectable({
  providedIn: 'root'
})
export class SpritelyFileService {

  downloader: DownloadLink = new DownloadLink();

  constructor(private client: HttpClient) { }

  parseLoadData(loadData: string): Observable<SpritelyData> {
    return this.client.post<SpritelyData>("/spritely/load",loadData);
  }

  downloadImage(saveData: SpritelyData, scale: number, fileName: string, after: (() => void) = (() => {})): void {
    this.client.post<String>("/spritely/save",saveData).subscribe((base64) => {
      let args: any = {
        base64:base64,
        filename:fileName,
        scale:scale
      };
      this.downloader.setFileName(fileName);
      this.downloader.setPath("/spritely/saveimg?" + (new URLSearchParams(args)).toString());
      this.downloader.invokeDownload();
      after();
    });
  }

  downloaddata(saveData: SpritelyData, fileName: string, after: (() => void) = (() => {})): void {
    this.client.post<String>("/spritely/save",saveData).subscribe((base64) => {
      let args: any = {
        base64:base64,
        filename:fileName,
      };
      this.downloader.setFileName(fileName);
      this.downloader.setPath("/spritely/savedata?" + (new URLSearchParams(args)).toString());
      this.downloader.invokeDownload();
      after();
    });
  }
}
