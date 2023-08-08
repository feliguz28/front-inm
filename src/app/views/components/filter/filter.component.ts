import { Component } from '@angular/core';
import { FormControl, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ArrayParametric } from 'src/app/models/parametric.interface';
import { ParametricsService } from 'src/app/services/parametrics.service';

@Component({
  selector: 'bs-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  homeStates!: ArrayParametric;
  homeTypes!: ArrayParametric;
  Vias!: ArrayParametric;
  zones!: ArrayParametric;
  categories!: ArrayParametric;

  search = new UntypedFormGroup({
    zones: new UntypedFormControl([]),
    homeType: new UntypedFormControl([]),
    homeState: new UntypedFormControl([]),
    desde: new FormControl(null),
    hasta: new FormControl(null),
    minRoom: new FormControl(null),
    fromMeasure:new FormControl(null),
    toMeasure:new FormControl(null),
    minParking:new FormControl(null),
    stratum:new FormControl(null)
	});

  constructor(private parametricService: ParametricsService){}

  ngOnInit(): void {
    
    window.scrollTo(0, 0);
    this.getParametricData();
  }

  searching(){
    console.log(this.search.value)
  }


  getParametricData() {
    this.parametricService.getCategories().subscribe(data => {
      this.categories = data;
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
