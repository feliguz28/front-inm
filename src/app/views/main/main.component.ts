import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {


  search = new UntypedFormGroup({
    zones: new UntypedFormControl([]),
    homeType: new UntypedFormControl([]),
    homeState: new UntypedFormControl([]),
    desde: new FormControl(null),
    hasta: new FormControl(null),
	});

  mockZone: { id: number; name: string }[] = [
    { id: 1, name: 'Mock1' },
    { id: 2, name: 'Mock2' },
    { id: 3, name: 'Mock3' },
    { id: 4, name: 'Mock4' }
  ];
  mockHomeType: { id: number; name: string }[] = [
    { id: 1, name: 'MockHT1' },
    { id: 2, name: 'MockHT2' },
    { id: 3, name: 'MockHT3' },
    { id: 4, name: 'MockHT4' }
  ];
  mockHomeState: { id: number; name: string }[] = [
    { id: 1, name: 'MockHS1' },
    { id: 2, name: 'MockHS2' },
    { id: 3, name: 'MockHS3' },
    { id: 4, name: 'MockHS4' }
  ];

  searching(){
    console.log(this.search.value)
  }


}
