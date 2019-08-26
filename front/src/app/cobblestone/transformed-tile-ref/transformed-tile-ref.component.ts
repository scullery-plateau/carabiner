import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tf-tile-ref',
  templateUrl: './transformed-tile-ref.component.html',
  styleUrls: ['./transformed-tile-ref.component.scss']
})
export class TransformedTileRefComponent implements OnInit {

  @Input()
  key: string;

  constructor() { }

  ngOnInit() {
  }

}
