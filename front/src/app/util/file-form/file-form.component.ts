import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Trigger } from '../trigger'
import { DownloadLink } from "../download-link";

@Component({
  selector: 'file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.scss']
})
export class FileFormComponent implements OnInit {

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

  downloadLink: DownloadLink = new DownloadLink();

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
    }
  }

  saveDialogConfirmer() {
    let me = this;
    return function() {
      me.buildSaveData().subscribe((detail) => {
        let filename = me.fileForm.value.saveFile;
        if (filename) {
          me.downloadLink.setFileName(filename);
        }
        me.downloadLink.setPath(me.saveRoute(filename,detail));
        me.downloadLink.invokeDownload();
      });
    }
  }

  saveFileNameGetter() {
    let me = this;
    return function() {
      return me.fileForm.value.saveFile || me.defaultSaveFile;
    }
  }
}
