import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeCreate, ImageCreate } from 'src/app/models/home.interface';
import { ArrayParametric } from 'src/app/models/parametric.interface';
import { HomeService } from 'src/app/services/home.service';
import { ParametricsService } from 'src/app/services/parametrics.service';


@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.scss']
})
export class CreateHomeComponent {
  homeFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  detailsFormGroup: FormGroup;
  homeStates!: ArrayParametric;
  homeTypes!: ArrayParametric;
  Vias!: ArrayParametric;
  Zones!: ArrayParametric;
  Categories!: ArrayParametric;
  imagesFormGroup: FormGroup;
  selectedFilesCount: number = 0;

  constructor(
    private homeService: HomeService,
    private parametricService: ParametricsService,
    private formBuilder: FormBuilder
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

    this.imagesFormGroup = this.formBuilder.group({
      principal: [false],
      files: [[]]
    });
  }

  ngOnInit(): void {
    this.getParametricData();
  }

  saveForm() {
    if (this.homeFormGroup.valid && this.addressFormGroup.valid && this.detailsFormGroup.valid) {

      const images: ImageCreate[] = this.imagesFormGroup.value.files.map((file: File) => ({
        principal: this.imagesFormGroup.value.principal,
        file: file
      }));
      
      const homeCreate: HomeCreate = {
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
        address: {
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
          bathRoom: this.detailsFormGroup.value.bathRoom,
          measures: this.detailsFormGroup.value.measures,
          parking: this.detailsFormGroup.value.parking,
          room: this.detailsFormGroup.value.room,
          stratum: this.detailsFormGroup.value.stratum,
        },
        images: images
      };
      console.log(homeCreate)
      this.homeService.createHome(homeCreate).subscribe(data => {
        console.log(data)
      })
    }
  }

  onFileSelected(event: any) {
    const files: File[] = Array.from(event.target.files);
    this.imagesFormGroup.get('files')?.setValue(files);
    this.selectedFilesCount = files.length;
  }

clearImages() {
  this.imagesFormGroup.get('files')?.setValue([]);
  this.selectedFilesCount = 0;
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
      this.Zones = data;
    })
  }

}
