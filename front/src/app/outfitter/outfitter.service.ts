import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OutfitterService {

  constructor(private client: HttpClient) { }

  loadSchematic(schematic: string): Observable<string> {
    return this.client.post<string>("/outfitter/publish",schematic);
  }
}
