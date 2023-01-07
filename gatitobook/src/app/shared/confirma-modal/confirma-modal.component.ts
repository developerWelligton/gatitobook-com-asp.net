import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirma-modal',
  templateUrl: './confirma-modal.component.html',
  styleUrls: ['./confirma-modal.component.css']
})
export class ConfirmaModalComponent implements OnInit {
  @Input() title: string | any;
  @Input() msg: string | any;
  @Input() cancelTxt = 'Cancelar';
  @Input() okTxt = 'Sim'
  
  confirmResult: Subject<boolean> | any;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.confirmResult = new Subject();
  }

  onConfirm() {
    this.confirmAndClose(true);
  }

  onClose() {
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean) {
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }

}
