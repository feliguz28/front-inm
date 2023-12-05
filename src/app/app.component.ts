import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalMainComponent } from './modal-main/modal-main.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Bluesmart';

statusWS:boolean=false;

  menuMobile: boolean = false;
   screenWidth?: number;
    path?:string;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = window.innerWidth;
   
    const path = window.location.pathname.includes('dashboard');
   if(this.screenWidth <= 1024 && !path){
    this.menuMobile = true;
   }

   if(this.screenWidth > 1024 && !path){
    this.menuMobile = false;
   }

  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
   this.router.url.subscribe(url => { 
    let urlString = url.join('')
    if(!urlString.includes('dashboard')){

      if(this.screenWidth! <= 1024 ){
        this.menuMobile = true;
      }
    }
  })
   
  


    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.openModal();
  }

  constructor(private dialog: MatDialog, private renderer: Renderer2, private router: ActivatedRoute) {}


  openModal(): void {
    const dialogRef = this.dialog.open(ModalMainComponent, {
      width: '70%',
      panelClass: 'no-padding',

    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
