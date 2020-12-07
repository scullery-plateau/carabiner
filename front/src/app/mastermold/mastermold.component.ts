import { Component, OnInit } from '@angular/core';
import {Mini} from "./mini";
import {PublishMinisService} from "./publish-minis.service";
import {CountUpdate} from "./count-update";
import {MiniSVG} from "./mini-svg";

@Component({
  selector: 'app-mastermold',
  templateUrl: './mastermold.component.html',
  styleUrls: ['./mastermold.component.scss']
})
export class MastermoldComponent implements OnInit {

  private images: Map<String,Mini> = new Map<String, Mini>();

  private data : Mini[] = [];

  constructor(private pubService: PublishMinisService) { }

  ngOnInit() {
  }

  updateData() {
    this.data = Array.from(this.images.values());
  }

  updateCount(update:CountUpdate) {
    this.images.get(update.filename).count = update.count;
    this.updateData();
  }

  deleteImage(filename: string) {
    this.images.delete(filename);
    this.updateData();
  }

  addImage(e) {
    let files = Array.from(e.target.files);
    let countdown : {} = files.reduce((out : {},file : File) => {
      out[file.name] = true;
      return out;
    },{});
    console.log(files);
    let me = this;
    if (files.length > 0) {
      files.forEach((file : File) => {
        let reader = new FileReader();
        reader.onload = function() {
          let mini = new Mini();
          mini.filename = file.name;
          mini.count = 1;
          mini.url = reader.result.toString();
          me.images.set(file.name,mini);
          delete countdown[file.name];
          if (Object.entries(countdown).length == 0) {
            me.updateData();
          }
        };
        reader.readAsDataURL(file);
      });
    }
  }

  publish() {
    this.pubService.getPrintableTemplate().subscribe((resp) => {
      let html : string = resp.replace("<!-- content here -->",MiniSVG.buildPageContents(Array.from(this.images.values())).join("\n"));
      let w = window.open("", "_blank");
      w.document.write(html);
    });
  }
}
