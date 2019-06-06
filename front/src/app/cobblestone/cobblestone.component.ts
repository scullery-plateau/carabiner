import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {CobblestoneService} from "../cobblestone.service";

@Component({
  selector: 'app-cobblestone',
  templateUrl: './cobblestone.component.html',
  styleUrls: ['./cobblestone.component.scss']
})
export class CobblestoneComponent implements OnInit {

  private state: {} = {
    palettes:{},
    tiles:{},
    transforms:{}
  };

  constructor(private fb: FormBuilder, private cobblestoneService: CobblestoneService) { }

  ngOnInit() {
  }

}
