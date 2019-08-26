import { Injectable } from '@angular/core';

const chars: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+-=`;:'\"[]{}\\|,.<>/?";

@Injectable({
  providedIn: 'root'
})
export class CharIndexService {

  constructor() { }

  getAll():string[] {
    return chars.split("");
  }

  getUnused(used:string):string[] {
    return chars.split("").filter((ch) => {
      return (used.indexOf(ch) == -1);
    });
  }
}
