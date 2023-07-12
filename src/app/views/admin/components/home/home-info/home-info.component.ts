import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Home } from 'src/app/models/home.interface';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss']
})
export class HomeInfoComponent {
  translateX = 0;
  public currentIndex = 0;
  public imagesPerSection = 3;
  

  constructor(@Inject(MAT_DIALOG_DATA) public home: Home) {
    this.home.images = [
      { url: 'assets/images/Mocks/home1.jpg' },
      { url: 'assets/images/Mocks/home2.jpg' },
      { url: 'assets/images/Mocks/home3.jpg' },
      { url: 'assets/images/Mocks/home4.jpg' },
      { url: 'assets/images/Mocks/home5.jpg' },
      { url: 'assets/images/Mocks/home6.jpg' },
      { url: 'assets/images/Mocks/home7.jpg' },
      { url: 'assets/images/Mocks/home8.jpg' }
    ];
  }

  scrollGallery(direction: string): void {
    const numImages = this.home.images.length;
    
    console.log('Current Index:', this.currentIndex);
  
    if (direction === 'left') {
      this.currentIndex = (this.currentIndex - 1 + numImages) % numImages;
    } else if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % numImages;
    }
  
    console.log('Visible Indices:', this.getVisibleIndices());
  }

  getVisibleIndices(): number[] {
    const numImages = this.home.images.length;
    const visibleIndices = [];

    for (let i = 0; i < this.imagesPerSection; i++) {
      const index = (this.currentIndex + i) % numImages;
      visibleIndices.push(index);
    }

    return visibleIndices;
  }
}
