import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Home } from 'src/app/models/home.interface';
import { ArrayParametric } from 'src/app/models/parametric.interface';
import { AdviserService } from 'src/app/services/adviser.service';
import { HomeService } from 'src/app/services/home.service';
import { ParametricsService } from 'src/app/services/parametrics.service';
import { auxText } from 'src/app/shared/const/auxTexts';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent {

  idHomeEdit?: any;
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
  public uriHome?:string;
  public uriWSapp?:string;
  public zone?:string;
  public photo?:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private homeService: HomeService,
    private adviserService: AdviserService,
    private parametricService: ParametricsService,    
  ){

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idHomeEdit = params['id'];
    });
    this.getHomeById();
    this.getParametricData();
    this.updateVisibleImages();
    
    this.uriHome = window.location.origin + this.router.url;
    this.uriWSapp = `https://api.whatsapp.com/send?phone=3143435453&text=${auxText.messageWSapp} ${this.uriHome}`
  }

  getHomeById() {
    this.homeService.getHomeById(this.idHomeEdit).subscribe(data => {
      this.home = data;
      this.getAdvisersByZone();
    })
  }

  getAdvisersByZone() {
  //  this.adviserService.getAdvisersByZoneId(1).subscribe(data=>{
  //   console.log('agentes',data)
  //   this.photo = 'file:///C:/images/a4e77177-07c8-4903-b8c8-92ea81d48fc8'
  //  });
  }

  scrollGallery(direction: string): void {
    const numImages = this.home.images.length;

    if (direction === 'left') {
      this.currentIndex = (this.currentIndex - 1 + numImages) % numImages;
    } else if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % numImages;
    }

    this.updateVisibleImages();
    this.largeImageIndex = this.currentIndex;
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

  showLargeImage(index: number): void {
    this.largeImageIndex = index;
  }

  updateVisibleImages() {
   
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
      this.zone = this.Zones.find(z=> z.id == this.home.zoneId)?.name;
    })
  }
}
