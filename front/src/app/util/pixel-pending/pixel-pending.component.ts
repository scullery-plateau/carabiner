import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'pixel-pending',
  templateUrl: './pixel-pending.component.html',
  styleUrls: ['./pixel-pending.component.scss']
})
export class PixelPendingComponent implements OnInit {

  @ViewChild('pendingDialog') dialogRef: ElementRef;

  @Input()
  label: string = "";

  dialog: HTMLDialogElement;

  constructor() { }

  ngOnInit() {
    this.dialog = this.dialogRef.nativeElement as HTMLDialogElement;
  }

  block(): void {
    console.log("blocking");
    this.dialog.showModal();
  }

  complete(): void {
    console.log("pending complete");
    this.dialog.close();
  }

}
