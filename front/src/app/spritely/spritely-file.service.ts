import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {SpritelyData} from "./spritely-data";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpritelyFileService {

  constructor(private client: HttpClient) { }

  parseLoadData(loadData: string): Observable<SpritelyData> {
    return this.client.post<SpritelyData>("/spritely/load",loadData);
  }

  compressSaveData(saveData: SpritelyData): Observable<string> {
    return this.client.post<string>("/spritely/save",saveData)
  }
}
