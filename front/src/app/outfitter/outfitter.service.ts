import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DatasetMeta} from "./dataset-meta";

@Injectable({
  providedIn: 'root'
})
export class OutfitterService {

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
}
