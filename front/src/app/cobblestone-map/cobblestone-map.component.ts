import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cobblestone-map',
  templateUrl: './cobblestone-map.component.html',
  styleUrls: ['./cobblestone-map.component.scss']
})
export class CobblestoneMapComponent implements OnInit {

  @Input()
  state: any;

  constructor() { }

  ngOnInit() {
  }

}
