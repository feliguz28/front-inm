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
      categoryId: ['', Validators.required],
      description: ['', Validators.required],
      discount: ['', Validators.required],
      homeStateId: ['', Validators.required],
      homeTypeId: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      status: ['', Validators.required],
      zoneId: ['', Validators.required],
    });

    this.addressFormGroup = this.formBuilder.group({
      homeTypeAddressId: ['', Validators.required],
      identificationHome: ['', Validators.required],
      letterBlock: [''],
      letterVia: ['', Validators.required],
      numberBlock: [''],
      numberVia: ['', Validators.required],
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
