import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {DomSanitizer} from '@angular/platform-browser';

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
  handleLoad: any;

  @Input()
  fileContent: string;

  @Input()
  defaultSaveFile: string;

  constructor(private fb: FormBuilder, private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }

  loadFile(e) {
    console.log("load file");
    let inputValue = e.target;
    let file:File = inputValue.files[0];
    let myReader:FileReader = new FileReader();
    var me = this;
    myReader.onload = function(e){
      // you can perform an action with readed data here
      console.log("file onload");
      me.handleLoad(myReader.result,file.name);
    }
    myReader.readAsText(file);
  }

  getSaveFileName() {
    return this.fileForm.value.saveFile || this.defaultSaveFile;
  }

  getSaveFileContent() {
    return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(new Blob([this.fileContent], {type: 'text/plain'})));
  }



}
