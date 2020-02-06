import {Component, Input, OnInit} from '@angular/core';
import {Mini} from "../mini";

@Component({
  selector: 'mini-gallery',
  templateUrl: './mini-gallery.component.html',
  styleUrls: ['./mini-gallery.component.scss']
})
export class MiniGalleryComponent implements OnInit {

  @Input()
  private data: Map<String,Mini>;

  private scale = 7;

  private frameRect = {
    small:[5,[0,65]],
    large:[30,[5,35]],
    steps:[70,20]
  };

  constructor() { }

  ngOnInit() {
  }

}
