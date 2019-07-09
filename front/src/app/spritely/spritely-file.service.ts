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
    this.client.post<String>("/spritely/img64",{
      "art":saveData,
      "scale":scale
    }).subscribe((base64) => {
      this.downloader.setFileName(fileName);
      this.downloader.setPath("data:image/png;base64," + base64);
      this.downloader.invokeDownload();
      after();
    });
  }

  downloaddata(saveData: SpritelyData, fileName: string, after: (() => void) = (() => {})): void {
    this.client.post<String>("/spritely/rawdata",saveData).subscribe((rawdata) => {
      this.downloader.setFileName(fileName);
      this.downloader.setPath("data:text/plain;," + encodeURIComponent(rawdata.toString()));
      this.downloader.invokeDownload();
      after();
    });
  }
}
