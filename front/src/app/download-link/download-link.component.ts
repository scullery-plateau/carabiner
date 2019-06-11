import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { Trigger } from '../trigger';

@Component({
  selector: 'download-link',
  templateUrl: './download-link.component.html',
  styleUrls: ['./download-link.component.scss']
})
export class DownloadLinkComponent implements OnInit {

  @ViewChild('downloadLink') dlRef: ElementRef;

  @Input()
  getSaveFileName: any;

  @Input()
  saveDataUpdateTrigger: Trigger;

  content: any;

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
    let me = this;
    this.saveDataUpdateTrigger.addListener(function(e){
      console.log("init download link");
      me.content = me.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(new Blob([e.detail], {type: 'text/plain'})));
    })
  }

  invokeDownload() {
    let a = this.dlRef.nativeElement as HTMLAnchorElement;
    a.click();
  }

  sanitizeContent() {
    return
  }

}
