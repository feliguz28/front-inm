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
    { id: 1, name: 'Chapinero' },
    { id: 2, name: 'Cedritos' },
    { id: 3, name: 'Colina' },
    { id: 4, name: 'Felicidad' },
    { id: 5, name: 'Suba' },
    { id: 6, name: 'Zona 80' }
  ];
  mockHomeType: { id: number; name: string }[] = [
    { id: 1, name: 'Apartamento' },
    { id: 2, name: 'Apartaestudio' },
    { id: 3, name: 'Bodega' },
    { id: 4, name: 'Consultorio' },
    { id: 5, name: 'Casa' },
    { id: 6, name: 'Local' },
    { id: 7, name: 'Oficina' }
  ];
  mockHomeState: { id: number; name: string }[] = [
    { id: 1, name: 'Amoblado' },
    { id: 2, name: 'Nuevo' },
    { id: 3, name: 'Remodelado' },
    { id: 4, name: 'Sin amoblar' }
  ];

  searching(){
    console.log(this.search.value)
  }


}
