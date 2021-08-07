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

  getPrintableTemplate(): Observable<string> {
    return this.client.get("/mastermold/template.html",{responseType:"text"});
  }
}
