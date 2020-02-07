import { Injectable } from '@angular/core';
import {Mini} from "./mini";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http/src/response";

@Injectable({
  providedIn: 'root'
})
export class PublishMinisService {

  constructor(private client: HttpClient) { }

  buildMinis(minis: Mini[]) : Observable<HttpResponse<string>> {
    console.log(minis);
    console.log(JSON.stringify(minis));
    return this.client.post("/mastermold/publish",minis,{ observe: 'response', responseType: 'text' });
  }
}
