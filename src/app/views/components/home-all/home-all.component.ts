import { Component, Input } from '@angular/core';
import { Home } from 'src/app/models/home.interface';
import { ArrayParametric } from 'src/app/models/parametric.interface';
import { ParametricsService } from 'src/app/services/parametrics.service';

@Component({
  selector: 'app-home-all',
  templateUrl: './home-all.component.html',
  styleUrls: ['./home-all.component.scss']
})
export class HomeAllComponent {
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

  constructor(private parametricService:ParametricsService){

  }

  ngOnInit() : void{
    this.getParametricData();
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
}
