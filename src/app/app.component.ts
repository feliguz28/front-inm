import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalMainComponent } from './modal-main/modal-main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front-inm';
  
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.openModal();
  }

  constructor(private dialog: MatDialog) {}


  openModal(): void {
    const dialogRef = this.dialog.open(ModalMainComponent, {
      width: '70%',
      panelClass: 'no-padding',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado');
    });
  }
}
