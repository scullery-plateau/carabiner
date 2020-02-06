import { Component, OnInit } from '@angular/core';
import {Mini} from "./mini";
import {PublishMinisService} from "./publish-minis.service";

@Component({
  selector: 'app-mastermold',
  templateUrl: './mastermold.component.html',
  styleUrls: ['./mastermold.component.scss']
})
export class MastermoldComponent implements OnInit {

  private images: Map<String,Mini> = new Map<String, Mini>();

  constructor(private pubService: PublishMinisService) { }

  ngOnInit() {
  }

  addImage(e) {
    let files = e.target.files;
    console.log(files);
    let me = this;
    if (files.length > 0) {
      files.forEach((file) => {
        let reader = new FileReader();
        reader.onload = function() {
          let mini = new Mini();
          mini.filename = file.name;
          mini.count = 1;
          mini.url = reader.result.toString();
          me.images[file.name] = mini;
        };
        reader.readAsDataURL(file);
      });
    }
  }

  publish() {
    this.pubService.buildMinis(this.images.values()).subscribe((html) => {
      let w = window.open("", "_blank");
      w.document.write(html);
    });
  }
}
