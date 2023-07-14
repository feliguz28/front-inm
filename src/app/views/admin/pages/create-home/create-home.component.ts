import { Component, OnInit } from '@angular/core';
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
export class CreateHomeComponent implements OnInit {
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
      favorite: [false],
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
      const formData = new FormData();
  
      // Agregar datos del formulario al formData
      formData.append('categoryId', this.homeFormGroup.value.categoryId?.toString() ?? '');
      formData.append('description', this.homeFormGroup.value.description ?? '');
      formData.append('discount', this.homeFormGroup.value.discount?.toString() ?? '');
      formData.append('homeStateId', this.homeFormGroup.value.homeStateId?.toString() ?? '');
      formData.append('homeTypeId', this.homeFormGroup.value.homeTypeId?.toString() ?? '');
      formData.append('name', this.homeFormGroup.value.name ?? '');
      formData.append('price', this.homeFormGroup.value.price?.toString() ?? '');
      formData.append('status', this.homeFormGroup.value.status?.toString() ?? '');
      formData.append('zoneId', this.homeFormGroup.value.zoneId?.toString() ?? '');
      formData.append('favorite', this.homeFormGroup.value.favorite?.toString() ?? '');
  
      // Agregar dirección al formData
      formData.append('identificationHome', this.addressFormGroup.value.identificationHome ?? '');
      formData.append('letterBlock', this.addressFormGroup.value.letterBlock ?? '');
      formData.append('letterVia', this.addressFormGroup.value.letterVia ?? '');
      formData.append('numberBlock', this.addressFormGroup.value.numberBlock?.toString() ?? '');
      formData.append('numberHome', this.addressFormGroup.value.numberHome?.toString() ?? '');
      formData.append('numberVia', this.addressFormGroup.value.numberVia?.toString() ?? '');
      formData.append('prefix', this.addressFormGroup.value.prefix ?? '');
      formData.append('suffix', this.addressFormGroup.value.suffix ?? '');
      formData.append('viaId', this.addressFormGroup.value.viaId?.toString() ?? '');
  
      // Agregar detalles al formData
      formData.append('bathRoom', this.detailsFormGroup.value.bathRoom?.toString() ?? '');
      formData.append('measures', this.detailsFormGroup.value.measures?.toString() ?? '');
      formData.append('parking', this.detailsFormGroup.value.parking?.toString() ?? '');
      formData.append('room', this.detailsFormGroup.value.room?.toString() ?? '');
      formData.append('stratum', this.detailsFormGroup.value.stratum?.toString() ?? '');
  
      // Agregar imágenes al formData
      const files: ImageCreate[] = this.imagesFormGroup.value.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i]?.file;
        if (file) {
          formData.append('images', file, file.name ?? '');
          formData.append('isPrincipal', file === this.imagesFormGroup.value.principal ? 'true' : 'false');
        }
      }
  
      const homeCreate: HomeCreate = this.formDataToHomeCreate(formData);
  
      this.homeService.createHome(homeCreate).subscribe(data => {
        console.log(data);
      });
    }
  }
  
  formDataToHomeCreate(formData: FormData): HomeCreate {
    const images: ImageCreate[] = this.imagesFormGroup.value.files;
    const homeCreate: HomeCreate = {
      categoryId: Number(formData.get('categoryId')),
      description: formData.get('description') as string,
      discount: Number(formData.get('discount')),
      homeStateId: Number(formData.get('homeStateId')),
      homeTypeId: Number(formData.get('homeTypeId')),
      name: formData.get('name') as string,
      price: Number(formData.get('price')),
      status: formData.get('status') === 'true',
      zoneId: Number(formData.get('zoneId')),
      favorite: formData.get('favorite') === 'true',
      address: {
        identificationHome: formData.get('identificationHome') as string,
        letterBlock: formData.get('letterBlock') as string,
        letterVia: formData.get('letterVia') as string,
        numberBlock: Number(formData.get('numberBlock')),
        numberHome: Number(formData.get('numberHome')),
        numberVia: Number(formData.get('numberVia')),
        prefix: formData.get('prefix') as string,
        suffix: formData.get('suffix') as string,
        viaId: Number(formData.get('viaId')),
      },
      detail: {
        bathRoom: Number(formData.get('bathRoom')),
        measures: Number(formData.get('measures')),
        parking: Number(formData.get('parking')),
        room: Number(formData.get('room')),
        stratum: Number(formData.get('stratum')),
      },
      images: [], // Inicializamos el arreglo de imágenes vacío
    };
  
    for (let i = 0; i < images.length; i++) {
      const image: ImageCreate = {
        principal: images[i].principal,
        file: null, // No incluimos el objeto IFormFile directamente
        imageName: images[i].file?.name ?? '' // Obtenemos el nombre del archivo
      };
      homeCreate.images.push(image);
    }
  
    return homeCreate;
  }
  
  onFileSelected(event: any) {
    const files: File[] = Array.from(event.target.files);
    const imageFiles: ImageCreate[] = files.map((file: File) => ({
      principal: false,
      file: file,
      imageName: file.name ?? '' // Agregamos la propiedad 'imageName' con el nombre del archivo
    }));

    this.imagesFormGroup.get('files')?.setValue(imageFiles);
    this.selectedFilesCount = files.length;
  }

  clearImages() {
    this.imagesFormGroup.get('files')?.setValue([]);
    this.selectedFilesCount = 0;
  }

  setPrincipalImage(file: File) {
    const files: ImageCreate[] = this.imagesFormGroup.value.files;
    const index = files.findIndex((image: ImageCreate) => image.file === file);
    if (index !== -1) {
      const updatedFiles = files.map((image: ImageCreate, i: number) => ({
        ...image,
        principal: i === index
      }));

      this.imagesFormGroup.get('files')?.setValue(updatedFiles);
    }
  }

  getParametricData() {
    this.parametricService.getCategories().subscribe(data => {
      this.Categories = data;
    });
    this.parametricService.getHomeStates().subscribe(data => {
      this.homeStates = data;
    });
    this.parametricService.getHomeTypes().subscribe(data => {
      this.homeTypes = data;
    });
    this.parametricService.getVia().subscribe(data => {
      this.Vias = data;
    });
    this.parametricService.getZone().subscribe(data => {
      this.Zones = data;
    });
  }
}
