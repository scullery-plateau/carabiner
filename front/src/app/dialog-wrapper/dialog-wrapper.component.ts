import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

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

  @Input()
  dialogConfirm: any;

  @Input()
  dialogClose: any;

  dialog: HTMLDialogElement;

  constructor() { }

  ngOnInit() {
    this.dialog = this.dialogRef.nativeElement as HTMLDialogElement;
  }

  open() {
    this.dialog.showModal();
  }

  confirm() {
    this.dialogConfirm();
    this.dialogClose();
    this.dialog.close();
  }

  cancel() {
    this.dialogClose();
    this.dialog.close();
  }

}
