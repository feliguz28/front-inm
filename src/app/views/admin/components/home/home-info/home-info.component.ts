import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  selectedFiles!: File[];
  

  constructor(@Inject(MAT_DIALOG_DATA) public home: Home, private http: HttpClient) {
    this.home.images = [
      { id: '1', homeId: '1', url: 'assets/images/Mocks/home1.jpg', principal: false, file: null },
      { id: '2', homeId: '1', url: 'assets/images/Mocks/home2.jpg', principal: false, file: null },
      { id: '3', homeId: '1', url: 'assets/images/Mocks/home3.jpg', principal: false, file: null },
      { id: '4', homeId: '1', url: 'assets/images/Mocks/home4.jpg', principal: false, file: null },
      { id: '5', homeId: '1', url: 'assets/images/Mocks/home5.jpg', principal: false, file: null },
      { id: '6', homeId: '1', url: 'assets/images/Mocks/home6.jpg', principal: false, file: null },
      { id: '7', homeId: '1', url: 'assets/images/Mocks/home7.jpg', principal: false, file: null },
      { id: '8', homeId: '1', url: 'assets/images/Mocks/home8.jpg', principal: false, file: null }
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
