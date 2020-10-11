import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DatasetMeta} from "./dataset-meta";
import {DownloadLink} from "../util/download-link";
import {Schematic} from "./schematic";

@Injectable({
  providedIn: 'root'
})
export class OutfitterService {

  downloader: DownloadLink = new DownloadLink();

  constructor(private client: HttpClient) { }

  loadSchematic(schematic: string): Observable<string> {
    return this.client.post<string>("/outfitter/publish/edn",schematic);
  }

  downloadImage(schematic: Schematic, onload:()=>void) {
    return this.client.post<string>("/outfitter/publish/json",schematic.toJSON()).subscribe((base64) => {
      this.downloader.setFileName("outfit.png");
      this.downloader.setPath("data:image/png;base64," + base64);
      this.downloader.invokeDownload();
      onload();
    });
  }

  getDatasetDefs(bodyType: string): Observable<string> {
    return this.client.get("/outfitter/datasets/" + bodyType + ".svg",{responseType:"text"});
  }

  getDatasetMeta(bodyType: string): Observable<any> {
    return this.client.get<any>("/outfitter/datasets/" + bodyType + ".json");
  }

  downloadSchematic(schematic:Schematic) {
    this.downloader.setFileName("outfit.json");
    this.downloader.setPath("data:text/plain;," + encodeURIComponent(JSON.stringify(schematic.toJSON())));
    this.downloader.invokeDownload();
  }
}
