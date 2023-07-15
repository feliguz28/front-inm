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

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadImages() {
    const generalId = '45C0BCA6-D313-4047-36D7-08DB826E2051';
    const Test01 = {
      id : 1,
      name: 'test'
    }
    const imagesData = Array.from(this.selectedFiles).map(file => {
      return {
        file: file,
        principal: false
      };
    });
  
    const formData = new FormData();
    formData.append('generalId', generalId); // Agregar el ID general
    formData.append('PrincipalImageId', false.toString()); // Convertir el valor booleano a una cadena de texto
  
    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('images', this.selectedFiles[i], this.selectedFiles[i].name);
    }
    //formData.append('test', JSON.stringify(Test01))

    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data; boundary=---------------------------1234567890' // Reemplaza el límite con un valor válido
    });
  
    this.http.post<any>('https://localhost:7235/api/Home/upload-images', formData, { headers: headers }).subscribe(
      (response) => {
        // Manejar la respuesta del backend
      },
      (error) => {
        // Manejar el error
      }
    );
  }

}
