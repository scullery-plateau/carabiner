import { Injectable } from '@angular/core';
import {Mini} from "./mini";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublishMinisService {

  constructor(private client: HttpClient) { }


  buildMinis(minis: Mini[]) : Observable<string> {
    console.log(minis);
    console.log(JSON.stringify(minis));
    return this.client.post<string>("/mastermold/publish",minis);
  }
}
