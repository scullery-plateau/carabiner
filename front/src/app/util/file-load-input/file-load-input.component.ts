import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'file-load-input',
  templateUrl: './file-load-input.component.html',
  styleUrls: ['./file-load-input.component.scss']
})
export class FileLoadInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  loadedFileCallback: any;

  @Input()
  loadErrorCallback: any;

  loadFile(e) {
    console.log("load file");
    let inputValue = e.target;
    let file:File = inputValue.files[0];
    let myReader:FileReader = new FileReader();
    var me = this;
    myReader.onload = function(e){
      // you can perform an action with readed data here
      try {
        me.loadedFileCallback(myReader.result,file.name);
      } catch(e) {
        console.log(e);
        me.loadErrorCallback(e);
      }
    }
    myReader.readAsText(file);
  }

}
