import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-page-picker',
  templateUrl: './map-page-picker.component.html',
  styleUrls: ['./map-page-picker.component.scss']
})
export class MapPagePickerComponent implements OnInit {

  @Input()
  state: any;

  constructor() { }

  ngOnInit() {
  }

}
