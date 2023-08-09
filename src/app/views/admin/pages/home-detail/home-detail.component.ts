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
  public imagesPerSection = 3;

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
  }

  getHomeById() {
    this.homeService.getHomeById(this.idHomeEdit).subscribe(data => {
      this.home = data;
    })
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
