import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArrayParametric } from 'src/app/models/parametric.interface';
import { AdviserService } from 'src/app/services/adviser.service';
import { ParametricsService } from 'src/app/services/parametrics.service';

@Component({
  selector: 'app-adviser',
  templateUrl: './adviser.component.html',
  styleUrls: ['./adviser.component.scss']
})
export class AdviserComponent {
  imageUrl: any;
  @ViewChild('fileInput') fileInput?: ElementRef;

  form: FormGroup;

  zones!: ArrayParametric;

  constructor(private formBuilder: FormBuilder
    , private adviserService: AdviserService
    , private parametricService: ParametricsService
    , private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      phone:'',
      zones: new UntypedFormControl([])
    });
  }

  ngOnInit(): void {
    this.parametricService.getZone().subscribe(data => {
      this.zones = data;
    })
  }


  onFileChanged(event:any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }
  }

  handleReaderLoaded(e:any) {
    this.imageUrl = e.target.result;
  }

  upload() {
    const file: File = this.fileInput?.nativeElement.files[0];
    const formData = new FormData();
    formData.append('name', this.form?.get('name')?.value);
    formData.append('email', this.form?.get('email')?.value);
    formData.append('cellPhone', this.form?.get('phone')?.value);
    formData.append('imageFile', file);
    formData.append('zones', this.form?.get('zones')?.value);

    this.adviserService.createAdviser(formData).subscribe(data => {
      this._snackBar.open("Agente inmobiliario creado correctamente", "Cerrar");
    })
  }
}
