import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

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
  getSaveFileContent: any;

  content: any;

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }

  invokeDownload() {
    let a = this.dlRef.nativeElement as HTMLAnchorElement;
    this.content = this.sanitizeContent();
    a.click();
  }

  sanitizeContent() {
    return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(new Blob([this.getSaveFileContent()], {type: 'text/plain'})));
  }

}
