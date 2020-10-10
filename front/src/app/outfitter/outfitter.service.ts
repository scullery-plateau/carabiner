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
    return this.client.post<string>("/outfitter/publish",schematic);
  }

  getDatasetDefs(bodyType: string): Observable<string> {
    return this.client.get("/outfitter/datasets/" + bodyType + ".svg",{responseType:"text"});
  }

  getDatasetMeta(bodyType: string): Observable<DatasetMeta> {
    return this.client.get<DatasetMeta>("/outfitter/datasets/" + bodyType + ".json");
  }

  downloadSchematic(schematic:Schematic) {
    this.downloader.setFileName("outfit.json");
    this.downloader.setPath("data:text/plain;," + JSON.stringify(schematic.toJSON()));
    this.downloader.invokeDownload();
  }
}
