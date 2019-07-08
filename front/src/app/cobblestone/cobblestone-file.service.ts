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
    this.client.post<String>("/spritely/save",saveData).subscribe((base64) => {
      let args: any = {
        base64:base64,
        filename:fileName,
        scale:scale
      };
      this.downloader.setFileName(fileName);
      this.downloader.setPath("/spritely/saveimg?" + (new URLSearchParams(args)).toString());
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
      this.downloader.setPath("/spritely/savedata?" + (new URLSearchParams(args)).toString());
      this.downloader.invokeDownload();
    });
  }

}
