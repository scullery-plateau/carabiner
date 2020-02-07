import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mini} from "../mini";
import {CountUpdate} from "../count-update";

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  @Input()
  data: Mini[];

  @Output()
  countUpdated = new EventEmitter<CountUpdate>();

  @Output()
  imageRemoved = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  updateCount(e: Event, filename: string) {
    let target = e.target as HTMLInputElement;
    let update = new CountUpdate();
    update.count = parseInt(target.value);
    update.filename = filename;
    this.countUpdated.emit(update);
  }

  removeImage(filename: string) {
    this.imageRemoved.emit(filename);
  }
}
