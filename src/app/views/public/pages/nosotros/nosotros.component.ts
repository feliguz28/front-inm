import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  text = 'Nuestra compañía';
  typedText = '';
  currentIndex = 0;
  typingInterval: any;

  ngOnInit(): void {

    this.typingInterval = setInterval(() => {
      this.typeText();
    }, 200); // Intervalo en milisegundos entre letras

    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
      sections.forEach((section, index) => {
        if (index !== 0) {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop < window.innerHeight * 0.75) {
            section.classList.add('active');
          }
        }
      });
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.typingInterval);
  }

  typeText(): void {
    if (this.currentIndex < this.text.length) {
      this.typedText += this.text.charAt(this.currentIndex);
      this.currentIndex++;
    } else {
      clearInterval(this.typingInterval); // Detener la animación
    }
  }
}
