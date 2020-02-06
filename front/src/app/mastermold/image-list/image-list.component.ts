import {Component, Input, OnInit} from '@angular/core';
import {Mini} from "../mini";

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  @Input()
  data: Map<String,Mini>;

  constructor() { }

  ngOnInit() {
  }

  updateCount(e: Event, filename: string) {
    this.data[filename].count = e.target.value;
  }

  removeImage(filename: string) {
    delete this.data[filename];
  }
}
