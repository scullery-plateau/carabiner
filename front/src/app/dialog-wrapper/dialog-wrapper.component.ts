import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dialog-wrapper',
  templateUrl: './dialog-wrapper.component.html',
  styleUrls: ['./dialog-wrapper.component.scss']
})
export class DialogWrapperComponent implements OnInit {

  @ViewChild('myDialog') dialogRef: ElementRef;

  @Input()
  triggerBtnName: string;

  @Input()
  dialogId: string;

  @Output() onConfirm  = new EventEmitter<any>();
  @Output() onClose  = new EventEmitter<any>();

  dialog: HTMLDialogElement;

  constructor() { }

  ngOnInit() {
    console.log(this.dialogRef.nativeElement);
    console.log(document.getElementById(this.dialogId));
    this.dialog = this.dialogRef.nativeElement as HTMLDialogElement;
  }

  open() {
    console.log(document.getElementById(this.dialogId));
    this.dialog.showModal();
  }

  confirm() {
    console.log(document.getElementById(this.dialogId));
    this.onConfirm.emit(null);
    this.onClose.emit(null);
    this.dialog.close();
  }

  cancel() {
    console.log(document.getElementById(this.dialogId));
    this.onClose.emit(null);
    this.dialog.close();
  }

}
