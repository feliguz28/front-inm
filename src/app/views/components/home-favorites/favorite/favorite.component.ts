import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from 'src/app/models/home.interface';
import { ArrayParametric } from 'src/app/models/parametric.interface';
import { ParametricsService } from 'src/app/services/parametrics.service';

@Component({
  selector: 'bs-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  @Input() public home?:Home;
  homeStates!: ArrayParametric;
  homeTypes!: ArrayParametric;
  Vias!: ArrayParametric;
  Zones!: ArrayParametric;
  Categories!: ArrayParametric;

  homeType?:string;
  homeState?:string;
  category?:string;
  zone?:string;
  imagePrincipal?:string;

  constructor(
    private parametricService:ParametricsService,
    private router: Router
    ){

  }

  ngOnInit() : void{
    this.getParametricData();
    this.imagePrincipal = this.home?.images?.find(image => image?.principal === true)?.url
  }

  getHomeType(id: number | undefined): string {
    const homeType = this.homeTypes?.find(obj => obj.id === id);
    return homeType ? homeType.name : '';
  }

  getParametricData() {
    this.parametricService.getHomeTypes().subscribe(data => {
      this.homeType = data?.find(obj => obj.id === this.home?.homeTypeId)?.name;
    })
    this.parametricService.getCategories().subscribe(data => {
      this.category = data?.find(obj => obj.id === this.home?.categoryId)?.name;
    })
    this.parametricService.getHomeStates().subscribe(data => {
      this.homeState = data?.find(obj => obj.id === this.home?.homeStateId)?.name;
    })
    
    this.parametricService.getZone().subscribe(data => {
      this.zone = data?.find(obj => obj.id === this.home?.zoneId)?.name;
    })
  }

  showDetail(id: any) {
    this.router.navigate(['/detail', id]);
  }

}
