import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeCreate } from 'src/app/models/home.interface';

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.scss']
})
export class CreateHomeComponent {
  homeFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  detailsFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.homeFormGroup = this.formBuilder.group({
      categoryId: [null, Validators.required],
      description: ['', Validators.required],
      discount: [null, Validators.required],
      homeStateId: [null, Validators.required],
      homeTypeId: [null, Validators.required],
      name: ['', Validators.required],
      price: [null, Validators.required],
      status: [true],
      zoneId: [null, Validators.required],
    });

    this.addressFormGroup = this.formBuilder.group({
      homeTypeAddressId: [null, Validators.required],
      identificationHome: ['', Validators.required],
      letterBlock: [''],
      letterVia: ['', Validators.required],
      numberBlock: [null],
      numberVia: [null, Validators.required],
      prefix: [''],
      suffix: [''],
      viaId: ['', Validators.required],
    });

    this.detailsFormGroup = this.formBuilder.group({
      bathRoom: ['', Validators.required],
      measures: ['', Validators.required],
      parking: ['', Validators.required],
      room: ['', Validators.required],
      stratum: ['', Validators.required],
    });
  }

  //Mocks 
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
  mockVia: { id: number; name: string }[] = [
    { id: 1, name: 'Calle' },
    { id: 2, name: 'Carrera' },
    { id: 3, name: 'Diagonal' },
    { id: 4, name: 'Transversal' }
  ];
  mockHomeTypeAddresses: { id: number; name: string }[] = [
    { id: 1, name: 'Casa' },
    { id: 2, name: 'Piso' },
    { id: 3, name: 'Apartamento' },
    { id: 4, name: 'Bloque' }
  ];
  mockCategories: { id: number; name: string }[] = [
    { id: 1, name: 'Venta' },
    { id: 2, name: 'Arriendo' }
  ];

  // Método para guardar el formulario
  saveForm() {
    if (this.homeFormGroup.valid && this.addressFormGroup.valid && this.detailsFormGroup.valid) {
      const homeCreate: HomeCreate = {
        categoryId: this.homeFormGroup.value.categoryId,
        description: this.homeFormGroup.value.description,
        discount: this.homeFormGroup.value.discount,
        homeStateId: this.homeFormGroup.value.homeStateId,
        homeTypeId: this.homeFormGroup.value.homeTypeId,
        price: this.homeFormGroup.value.price,
        status: this.homeFormGroup.value.status,
        zoneId: this.homeFormGroup.value.zoneId,
        address: {
          homeTypeAddressId: this.addressFormGroup.value.homeTypeAddressId,
          identificationHome: this.addressFormGroup.value.identificationHome,
          letterBlock: this.addressFormGroup.value.letterBlock,
          letterVia: this.addressFormGroup.value.letterVia,
          numberBlock: this.addressFormGroup.value.numberBlock,
          numberVia: this.addressFormGroup.value.numberVia,
          prefix: this.addressFormGroup.value.prefix,
          suffix: this.addressFormGroup.value.suffix,
          viaId: this.addressFormGroup.value.viaId,
        },
        details: {
          bathRoom: this.detailsFormGroup.value.bathRoom,
          measures: this.detailsFormGroup.value.measures,
          parking: this.detailsFormGroup.value.parking,
          room: this.detailsFormGroup.value.room,
          stratum: this.detailsFormGroup.value.stratum,
        }
      };

      console.log(homeCreate);
    }
  }
}