import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-main',
  templateUrl: './modal-main.component.html',
  styleUrls: ['./modal-main.component.scss']
})
export class ModalMainComponent {
  constructor(private dialogRef: MatDialogRef<ModalMainComponent>) {}

  closeModal() {
    this.dialogRef.close();
  }
}
