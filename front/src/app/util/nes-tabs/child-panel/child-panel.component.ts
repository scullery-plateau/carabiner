import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab-child',
  templateUrl: './child-panel.component.html',
  styleUrls: ['./child-panel.component.scss']
})
export class ChildPanelComponent implements OnInit {

  @Input()
  label: string;

  hide: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
