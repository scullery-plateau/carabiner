import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  @ViewChild('accordianTab') tabRef: ElementRef;
  @ViewChild('accordianContainer') containerRef: ElementRef;

  @Input()
  tabId: string;

  @Input()
  containerId: string;

  @Input()
  initCollapsed: boolean;

  @Input()
  label: string;

  constructor() { }

  ngOnInit() {
  }

  expand() {
    console.log('expand');
    this.tabRef.nativeElement.classList.add("hide");
    this.containerRef.nativeElement.classList.remove("hide");
  }

  collapse() {
    console.log('collapse');
    this.tabRef.nativeElement.classList.remove("hide");
    this.containerRef.nativeElement.classList.add("hide");
  }

}
