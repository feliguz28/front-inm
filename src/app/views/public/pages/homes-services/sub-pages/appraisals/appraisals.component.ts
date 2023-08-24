import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bf-appraisals',
  templateUrl: './appraisals.component.html',
  styleUrls: ['./appraisals.component.scss']
})
export class AppraisalsComponent implements OnInit {
  animatedTexts = [
    'Comparativo y de mercado',
    'Capitalización de ingresos',
    'Costos de reposición',
    'Método residual',
    'Método de renta'
  ];
  currentTextIndex = 0;
  currentTexts: string[] = [];

  ngOnInit() {
    this.animatedTexts.forEach(_ => {
      this.currentTexts.push('');
    });

    this.animateText();
  }

  animateText() {
    if (this.currentTextIndex < this.animatedTexts.length) {
      const originalText = this.animatedTexts[this.currentTextIndex];
      this.typingEffect(originalText, 0);
    }
  }

  typingEffect(originalText: string, index: number) {
    if (index < originalText.length) {
      this.currentTexts[this.currentTextIndex] += originalText[index];
      index++;
      setTimeout(() => {
        this.typingEffect(originalText, index);
      }, 30); // Adjust the delay here (in milliseconds)
    } else {
      this.currentTextIndex++; // Move to the next text
      if (this.currentTextIndex < this.animatedTexts.length) {
        setTimeout(() => {
          this.animateText(); // Start typing the next text
        }, 400); // A pause of 1 second before starting the next item
      }
    }
  }
}
