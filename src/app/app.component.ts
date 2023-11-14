import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalMainComponent } from './modal-main/modal-main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front-inm';

  menuMobile: boolean = false;
   screenWidth?: number;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = window.innerWidth;
    
   if(this.screenWidth <= 1024){
    this.menuMobile = true;
   }

   if(this.screenWidth > 1024){
    this.menuMobile = false;
   }

  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

    if(this.screenWidth <= 1024){
      this.menuMobile = true;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.openModal();
  }

  constructor(private dialog: MatDialog, private renderer: Renderer2) {}


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
