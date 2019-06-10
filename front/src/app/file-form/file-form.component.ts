import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { DownloadLinkComponent } from '../download-link/download-link.component'

@Component({
  selector: 'file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.scss']
})
export class FileFormComponent implements OnInit {

  @ViewChild(DownloadLinkComponent) dlRef: DownloadLinkComponent;

  fileForm: FormGroup = this.fb.group({
    saveFile:['']
  });

  @Input()
  defaultSaveFile: string;

  @Input()
  prepareLoadedData: any;

  @Input()
  fileLoadCallback: any;

  @Input()
  cancelFileLoad: any;

  @Input()
  buildSaveData: any;

  loadedFileData: string;

  loadError: any;

  fileContent: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  tempDataReader() {
    let me = this;
    return function(fileData,fileName) {
      me.loadedFileData = me.prepareLoadedData(fileData);
      me.fileForm.patchValue({
        saveFile:fileName
      });
    }
  }

  saveDataPreparer() {
    let me = this;
    return function() {
      me.fileContent = me.buildSaveData();
    }
  }

  fileLoadConfirmer() {
    let me = this;
    return function() {
      if(!me.loadError) {
        me.fileLoadCallback(me.loadedFileData);
      }
    }
  }

}
