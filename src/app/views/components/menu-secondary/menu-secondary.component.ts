import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'bs-menu-secondary',
  templateUrl: './menu-secondary.component.html',
  styleUrls: ['./menu-secondary.component.scss']
})
export class MenuSecondaryComponent {
 
  redirectPSE():void{
    window.location.href = "https://colombia.recaudoexpress.com/sites/BLUESMARTINMOBILIARIASAS";
  }

}
