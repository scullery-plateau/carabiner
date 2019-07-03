import { Component, OnInit, Input, QueryList, ContentChildren, AfterContentInit  } from '@angular/core';
import { ChildPanelComponent } from '../child-panel/child-panel.component';

@Component({
  selector: 'tabbed-panel',
  templateUrl: './tabbed-panel.component.html',
  styleUrls: ['./tabbed-panel.component.scss']
})
export class TabbedPanelComponent implements OnInit, AfterContentInit {

  @ContentChildren(ChildPanelComponent)
  children: QueryList<ChildPanelComponent>;

  @Input()
  title: string;

  @Input()
  activeClass: string;

  @Input()
  initActiveIndex: number;

  activeIndex: number = 0;

  constructor() { }

  ngOnInit() {
    this.activeIndex = this.initActiveIndex;
  }

  ngAfterContentInit() {
    this.children.toArray()[this.activeIndex].show = true;
  }

  select(index: number) {
    this.children.toArray()[this.activeIndex].show = false;
    this.activeIndex = index;
    this.children.toArray()[this.activeIndex].show = true;
  }

}
