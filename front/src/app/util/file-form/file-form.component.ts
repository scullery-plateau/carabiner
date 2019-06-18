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

  @Input()
  saveRoute:any;

  loadedFileData: any;

  loadError: any;

  saveDataUpdateTrigger: Trigger = new Trigger("update-save-data");

  readyToSave: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    let me = this;
    this.saveDataUpdateTrigger.addListener(function(e){
      me.readyToSave = true;
    })
  }

  tempDataReader() {
    let me = this;
    return function(fileData,fileName) {
      me.prepareLoadedData(fileData).subscribe((data) => {
        me.loadedFileData = data;
        me.fileForm.patchValue({
          saveFile:fileName
        });
      });
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
      me.buildSaveData().subscribe((detail) => {
        me.saveDataUpdateTrigger.fireWithDetail(detail);
      })
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
