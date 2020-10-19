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

  private imageLoader(me: OutfitterService, onLoad:() => void) {
    return function(base64:string) {
      me.downloader.setFileName("outfit.png");
      me.downloader.setPath("data:image/png;base64," + base64);
      me.downloader.invokeDownload();
      onLoad();
    }
  }

  downloadImage(schematic: Schematic, onLoad:()=>void,onError:()=>void,retries?:number) {
    retries = retries || 0;
    let me = this;
    return this.client.post<string>("/outfitter/publish/json",schematic.toJSON())
      .subscribe(this.imageLoader(me,onLoad),(error) => {
        if(error.status === 503 && retries < 3) {
          setTimeout(()=>{
            me.downloadImage(schematic,onLoad,onError,retries + 1);
          },1000);
        } else {
          onError();
        }
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
