import { Component, OnInit } from '@angular/core';
import {Mini} from "../mastermold/mini";
import {OutfitterService} from "./outfitter.service";

@Component({
  selector: 'app-outfitter',
  templateUrl: './outfitter.component.html',
  styleUrls: ['./outfitter.component.scss']
})
export class OutfitterComponent implements OnInit {
  constructor(private os : OutfitterService) { }

  processing: boolean;
  base64: string;
  fileName: string;

  ngOnInit() {
  }

  loadSchematic(e) {
    let files = Array.from(e.target.files);
    if (files.length > 0) {
      let file : File = <File>files[0];
      let me = this;
      let reader = new FileReader();
      reader.onload = function() {
        me.processing = true;
        let data = reader.result.toString();
        console.log(data);
        me.os.loadSchematic(data).subscribe((base64) => {
          me.base64 = base64;
          me.fileName = file.name;
          me.processing = false;
        });
      };
      reader.readAsText(file);
    }
  }
}
