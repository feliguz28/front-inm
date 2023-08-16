import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'bs-menu-secondary',
  templateUrl: './menu-secondary.component.html',
  styleUrls: ['./menu-secondary.component.scss']
})
export class MenuSecondaryComponent {
  @ViewChild('jumpingLogo', { static: false }) jumpingLogo!: ElementRef;

  ngAfterViewInit(): void {
    this.startJumpingLogo();
  }

  startJumpingLogo(): void {
    setInterval(() => {
      this.jumpingLogo.nativeElement.classList.add('jumping');
      setTimeout(() => {
        this.jumpingLogo.nativeElement.classList.remove('jumping');
      }, 700); // Mantener la clase jumping por xms (x saltos rápidos)
    }, 4300); // Llamar cada x segundos (pausa de x segundos + xms)
  }

}
