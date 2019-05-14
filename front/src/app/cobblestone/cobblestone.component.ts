import { Component, OnInit } from '@angular/core';
import {CobblestoneService} from "../cobblestone.service";

@Component({
  selector: 'app-cobblestone',
  templateUrl: './cobblestone.component.html',
  styleUrls: ['./cobblestone.component.scss']
})
export class CobblestoneComponent implements OnInit {



  constructor(private cobblestoneService: CobblestoneService) { }

  ngOnInit() {
  }

}
