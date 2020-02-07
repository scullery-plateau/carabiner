import {Component, Input, OnInit} from '@angular/core';
import {Mini} from "../mini";

@Component({
  selector: 'mini-gallery',
  templateUrl: './mini-gallery.component.html',
  styleUrls: ['./mini-gallery.component.scss']
})
export class MiniGalleryComponent implements OnInit {

  @Input()
  private data: Mini[];

  private scale = 5;

  constructor() { }

  ngOnInit() {
  }

  repeat(mini:Mini) {
    return Array(mini.count).fill(mini);
  }

}
