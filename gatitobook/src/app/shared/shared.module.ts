import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmaModalComponent } from './confirma-modal/confirma-modal.component';



@NgModule({
  declarations: [AlertModalComponent, ConfirmaModalComponent],
  imports: [
    CommonModule 
  ]
})
export class SharedModule { }
