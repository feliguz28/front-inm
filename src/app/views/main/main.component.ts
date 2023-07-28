import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PagerRequestFilter } from 'src/app/models/pager-basic.interface';
import { ArrayParametric } from 'src/app/models/parametric.interface';
import { ParametricsService } from 'src/app/services/parametrics.service';

export class FilterBasic {
  zones?: string[];
  homeType?: string[];
  homeState?: string[];
  desde?: number;
  hasta?: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  homeStates!: ArrayParametric;
  homeTypes!: ArrayParametric;
  Vias!: ArrayParametric;
  zones!: ArrayParametric;
  Categories!: ArrayParametric;

  search = new UntypedFormGroup({
    zones: new UntypedFormControl([]),
    homeType: new UntypedFormControl([]),
    homeState: new UntypedFormControl([]),
    desde: new FormControl(null),
    hasta: new FormControl(null),
	});

  constructor(private parametricService: ParametricsService
    ,private router: Router){}

  ngOnInit(): void {
    this.getParametricData();
  }

  searching(){
    
    let filterParam = this.search.value as FilterBasic;
    let pageRequest = new PagerRequestFilter();


    
    this.router.navigate(['/avanzado'], { state: filterParam } );

  }

  mapFilter(filterParam : FilterBasic, pageRequest : PagerRequestFilter){
    
    filterParam.zones?.forEach(element => {
      if(pageRequest.ZoneIdString == undefined || pageRequest.ZoneIdString == null){
        pageRequest.ZoneIdString = "" + element;
      }else{
        pageRequest.ZoneIdString += "," + element;
      }
    });
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
      this.zones = data;
    })
  }

}
