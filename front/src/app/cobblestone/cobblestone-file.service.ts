import { Injectable } from '@angular/core';
import {DownloadLink} from "../util/download-link";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SpritelyData} from "../spritely/spritely-data";
import {CobblestoneData} from "./model/cobblestone-data";

@Injectable({
  providedIn: 'root'
})
export class CobblestoneFileService {

  downloader: DownloadLink = new DownloadLink();

  constructor(private client: HttpClient) { }

  parseLoadData(loadData: string): Observable<CobblestoneData> {
    return this.client.post<CobblestoneData>("/cobblestone/load",loadData);
  }

  downloadImage(saveData: CobblestoneData, scale: number, fileName: string): void {
    this.client.post<String>("/cobblestone/save",{
      "scale":scale,
      "full-map":saveData
    }).subscribe((base64) => {
      this.downloader.setFileName(fileName);
      this.downloader.setPath("data:image/png;base64," + base64);
      this.downloader.invokeDownload();
    });
  }

  downloaddata(saveData: CobblestoneData, fileName: string): void {
    this.client.post<String>("/cobblestone/save",saveData).subscribe((rawdata) => {
      this.downloader.setFileName(fileName);
      this.downloader.setPath("data:text/plain;," + encodeURIComponent(rawdata.split("\n").join("\r\n")));
      this.downloader.invokeDownload();
    });
  }

}
