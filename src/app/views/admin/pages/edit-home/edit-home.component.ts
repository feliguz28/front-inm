import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Home, HomeCreate } from 'src/app/models/home.interface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.scss']
})
export class EditHomeComponent {
  homeFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  detailsFormGroup: FormGroup;
  idHomeEdit!: string;
  home!: Home;

  constructor(private homeService: HomeService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.homeFormGroup = this.formBuilder.group({
      categoryId: [null, Validators.required],
      description: ['', Validators.required],
      discount: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      homeStateId: [null, Validators.required],
      homeTypeId: [null, Validators.required],
      name: ['', Validators.required],
      price: [null, Validators.required],
      status: [true],
      zoneId: [null, Validators.required],
      destacado: [false],
    });

    this.addressFormGroup = this.formBuilder.group({
      identificationHome: [''],
      letterBlock: [''],
      letterVia: [''],
      numberBlock: [null, Validators.required],
      numberHome: [null, Validators.required],
      numberVia: [null, Validators.required],
      prefix: [''],
      suffix: [''],
      viaId: ['', Validators.required],
    });

    this.detailsFormGroup = this.formBuilder.group({
      bathRoom: [null],
      measures: [null],
      parking: [null],
      room: [null],
      stratum: [null],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idHomeEdit = params.get('id') || '';
    });
    this.getHomeById();
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

  getHomeById() {
    this.homeService.getHomeById(this.idHomeEdit).subscribe(data => {
      this.home = data;
      this.patchFormValues();
    })
  }

  patchFormValues() {
    this.homeFormGroup.patchValue({
      name: this.home.name,
      categoryId: this.home.categoryId,
      description: this.home.description,
      discount: this.home.discount,
      homeStateId: this.home.homeStateId,
      homeTypeId: this.home.homeTypeId,
      price: this.home.price,
      status: this.home.status,
      zoneId: this.home.zoneId,
      destacado: this.home.favorite
    });

    this.addressFormGroup.patchValue({
      identificationHome: this.home.address.identificationHome,
      letterBlock: this.home.address.letterBlock,
      letterVia: this.home.address.letterVia,
      numberBlock: this.home.address.numberBlock,
      numberHome: this.home.address.numberHome,
      numberVia: this.home.address.numberVia,
      prefix: this.home.address.prefix,
      suffix: this.home.address.suffix,
      viaId: this.home.address.viaId
    });

    this.detailsFormGroup.patchValue({
      bathRoom: this.home.detail.bathRoom,
      measures: this.home.detail.measures,
      parking: this.home.detail.parking,
      room: this.home.detail.room,
      stratum: this.home.detail.stratum
    });
  }

  // Método para guardar el formulario
  saveForm() {
    if (this.homeFormGroup.valid && this.addressFormGroup.valid && this.detailsFormGroup.valid) {
      const homeCreate: Home = {
        id: this.home.id,
        categoryId: this.homeFormGroup.value.categoryId,
        description: this.homeFormGroup.value.description,
        discount: this.homeFormGroup.value.discount,
        homeStateId: this.homeFormGroup.value.homeStateId,
        homeTypeId: this.homeFormGroup.value.homeTypeId,
        name: this.homeFormGroup.value.name,
        price: this.homeFormGroup.value.price,
        status: this.homeFormGroup.value.status,
        zoneId: this.homeFormGroup.value.zoneId,
        favorite: this.homeFormGroup.value.destacado,
        images: [],
        address: {
          id: this.home.address.id,
          identificationHome: this.addressFormGroup.value.identificationHome,
          letterBlock: this.addressFormGroup.value.letterBlock,
          letterVia: this.addressFormGroup.value.letterVia,
          numberBlock: this.addressFormGroup.value.numberBlock,
          numberHome: this.addressFormGroup.value.numberHome,
          numberVia: this.addressFormGroup.value.numberVia,
          prefix: this.addressFormGroup.value.prefix,
          suffix: this.addressFormGroup.value.suffix,
          viaId: this.addressFormGroup.value.viaId,
        },
        detail: {
          id: this.home.detail.id,
          bathRoom: this.detailsFormGroup.value.bathRoom,
          measures: this.detailsFormGroup.value.measures,
          parking: this.detailsFormGroup.value.parking,
          room: this.detailsFormGroup.value.room,
          stratum: this.detailsFormGroup.value.stratum,
        }
      };
      this.homeService.editHome(homeCreate).subscribe(data => {
        this.router.navigate(['/dashboard/homeManagment']);
      })
    }
  }
}
