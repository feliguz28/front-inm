import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { PagerRequestFilter } from 'src/app/models/pager-basic.interface';
import { ArrayParametric, UseParametric } from 'src/app/models/parametric.interface';
import { ParametricsService } from 'src/app/services/parametrics.service';

@Component({
  selector: 'bs-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output() updateFilter = new EventEmitter<any>();

  homeStates!: ArrayParametric;
  homeTypes!: ArrayParametric;
  Vias!: ArrayParametric;
  zones!: ArrayParametric;
  categories!: ArrayParametric;
  districts!: ArrayParametric;


  search = new UntypedFormGroup({
    zones: new UntypedFormControl([]),
    homeType: new UntypedFormControl([]),
    homeState: new UntypedFormControl([]),
    category:new UntypedFormControl([]),
    district:new FormControl(null),
    desde: new FormControl(null),
    hasta: new FormControl(null),
    minRoom: new FormControl(null),
    fromMeasure:new FormControl(null),
    minBathRoom:new FormControl(null),
    toMeasure:new FormControl(null),
    minParking:new FormControl(null),
    stratum:new FormControl(null)
	});

  constructor(private parametricService: ParametricsService){

  }

  district = new FormControl('');
  filteredOptions?: Observable<ArrayParametric>;

  private _filter(value: string): ArrayParametric {
    const filterValue = value.toLowerCase();

    return this.districts.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {

    window.scrollTo(0, 0);
    this.getParametricData();    
    this.filteredOptions = this.district.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  searching(){
    let params = this.search.value;
    
    let pageRequest = new PagerRequestFilter();
    pageRequest.zoneIdString = params.zones?.join(",");
    pageRequest.homeStateIdString = params.homeState?.join(",")
    pageRequest.homeTypeIdString = params.homeType?.join(",");
    pageRequest.homeCategoryIdString = params.category?.join(",");
    pageRequest.fromMeasure = params.fromMeasure
    pageRequest.toMeasure = params.toMeasure
    pageRequest.minBathRoom = params.minBathRoom
    pageRequest.minParking = params.minParking
    pageRequest.stratum = params.stratum
    pageRequest.minRoom = params.minRoom
    pageRequest.fromPrice = params.desde
    pageRequest.toPrice = params.hasta
    pageRequest.districtsString = this.district.value

    this.updateFilter.emit(pageRequest);
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
    
    this.parametricService.getDistricts().subscribe(data => {
      this.districts = data;
    })
  }

}
