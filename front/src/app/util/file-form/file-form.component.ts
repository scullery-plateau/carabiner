import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { DownloadLinkComponent } from '../download-link/download-link.component'
import { Trigger } from '../trigger'

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
  buildSaveData: any;

  loadedFileData: string;

  loadError: any;

  fileContent: string;

  saveDataUpdateTrigger: Trigger = new Trigger("update-save-data");

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

  fileLoadCanceler() {
    let me = this;
    return function() {
      me.loadedFileData = undefined;
    }
  }

  loadErrorHandler() {
    let me = this;
    return function(e) {
      me.loadError = e.message;
    }
  }

  saveDialogOpener() {
    let me = this;
    return function() {
      console.log("opening save dialog")
      me.saveDataUpdateTrigger.fireWithDetail(me.buildSaveData());
    }
  }

  saveDialogConfirmer() {
    let me = this;
    return function() {
      me.dlRef.invokeDownload();
    }
  }

  saveFileNameGetter() {
    let me = this;
    return function() {
      return me.fileForm.value.saveFile || me.defaultSaveFile;
    }
  }
}
