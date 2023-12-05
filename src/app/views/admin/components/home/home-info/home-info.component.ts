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
  }

  scrollGallery(direction: string): void {
    const numImages = this.home.images.length;
      
    if (direction === 'left') {
      this.currentIndex = (this.currentIndex - 1 + numImages) % numImages;
    } else if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % numImages;
    }
  
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
