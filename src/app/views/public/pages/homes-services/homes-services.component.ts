import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogServicesComponent } from 'src/app/views/components/dialog-services/dialog-services.component';

@Component({
  selector: 'app-homes-services',
  templateUrl: './homes-services.component.html',
  styleUrls: ['./homes-services.component.scss']
})
export class HomesServicesComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(option:number) {

    const dialogRef = this.dialog.open(DialogServicesComponent, {
      data: option
    });
  }

}
