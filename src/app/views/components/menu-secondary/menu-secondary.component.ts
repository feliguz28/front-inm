import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-menu-secondary',
  templateUrl: './menu-secondary.component.html',
  styleUrls: ['./menu-secondary.component.scss']
})
export class MenuSecondaryComponent {
  panelOpenState = false;
  menuFullScreen:boolean = true;
  screenWidth?: number;

  constructor(private renderer: Renderer2,private router: Router) {}


  redirectPSE():void{
    window.location.href = "https://colombia.recaudoexpress.com/sites/BLUESMARTINMOBILIARIASAS";
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = window.innerWidth;
    
   if(this.screenWidth <= 1024){
    this.menuFullScreen = false;
   }

   if(this.screenWidth > 1024){
    this.menuFullScreen = true;
   }

  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
console.log(window.innerWidth)
    if(this.screenWidth <= 1024){
      this.menuFullScreen = false;
    }

  }

  goToAdmin():void{
    this.router.navigateByUrl('login');
  }



}
