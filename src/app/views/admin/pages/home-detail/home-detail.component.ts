import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Home } from 'src/app/models/home.interface';
import { ArrayParametric } from 'src/app/models/parametric.interface';
import { HomeService } from 'src/app/services/home.service';
import { ParametricsService } from 'src/app/services/parametrics.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent {

  idHomeEdit!: string;
  home!: Home;
  homeStates!: ArrayParametric;
  homeTypes!: ArrayParametric;
  Vias!: ArrayParametric;
  Zones!: ArrayParametric;
  Categories!: ArrayParametric;
  translateX = 0;
  public currentIndex = 0;
  public imagesPerSection = 4;
  largeImageIndex: number | null = 0;
  visibleImages: string[] = [];
  startIndex = 0;

  mockImageUrls: string[] = [
    'https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg',
    'https://fincaraiz.com.co/blog/wp-content/uploads/2022/08/casas-modernas-1-1920x1130.jpg',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzYSUyMG1vZGVybmF8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    'https://www.construyehogar.com/wp-content/uploads/2014/08/Dise%C3%B1o-de-casa-moderna-de-una-planta.jpg',
    'https://definicion.de/wp-content/uploads/2011/01/casa-2.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6S5ZyQUeeU0QEne2uCvkZC4NL5hK9adDaw&usqp=CAU'
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private homeService: HomeService,
    private parametricService: ParametricsService,    
  ){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idHomeEdit = params.get('id') || '';
    });
    this.getParametricData();
    this.getHomeById();
    this.updateVisibleImages();
  }

  getHomeById() {
    this.homeService.getHomeById(this.idHomeEdit).subscribe(data => {
      this.home = data;
      console.log(this.home);
    })
  }

  scrollGallery(direction: string): void {
    const numImages = this.mockImageUrls.length;

    if (direction === 'left') {
      this.currentIndex = (this.currentIndex - 1 + numImages) % numImages;
    } else if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % numImages;
    }

    this.updateVisibleImages();
    this.largeImageIndex = this.currentIndex;
  }

  getVisibleIndices(): number[] {
    const numImages = this.mockImageUrls.length;
    const visibleIndices = [];

    for (let i = 0; i < this.imagesPerSection; i++) {
      const index = (this.currentIndex + i) % numImages;
      visibleIndices.push(index);
    }

    return visibleIndices;
  }

  showLargeImage(index: number): void {
    this.largeImageIndex = index;
  }

  updateVisibleImages() {
    this.visibleImages = [];

    for (let i = 0; i < this.imagesPerSection; i++) {
      const index = (this.startIndex + i) % this.mockImageUrls.length;
      this.visibleImages.push(this.mockImageUrls[index]);
    }
  }

  getCategoryLabel(): string {
    if (this.home && this.home.categoryId) {
      if (this.home.categoryId === 1) {
        return 'Venta';
      } else if (this.home.categoryId === 2) {
        return 'Arriendo';
      }
    }
    return 'Desconocido';
  }

  getParametricData() {
    this.parametricService.getCategories().subscribe(data => {
      this.Categories = data;
    })
    this.parametricService.getHomeStates().subscribe(data => {
      this.homeStates = data;
    })
    this.parametricService.getHomeTypes().subscribe(data => {
      this.homeTypes = data;
    })
    this.parametricService.getVia().subscribe(data => {
      this.Vias = data;
    })
    this.parametricService.getZone().subscribe(data => {
      this.Zones = data;
    })
  }
}
