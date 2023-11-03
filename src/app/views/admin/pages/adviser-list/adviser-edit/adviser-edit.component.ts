import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdviserDto } from 'src/app/models/Adviser';
import { ArrayParametric } from 'src/app/models/parametric.interface';
import { AdviserService } from 'src/app/services/adviser.service';
import { ParametricsService } from 'src/app/services/parametrics.service';

@Component({
  selector: 'app-adviser-edit',
  templateUrl: './adviser-edit.component.html',
  styleUrls: ['./adviser-edit.component.scss']
})
export class AdviserEditComponent {
  imageUrl: any;
  @ViewChild('fileInput') fileInput?: ElementRef;

  form: FormGroup;

  zones!: ArrayParametric;

  constructor(private formBuilder: FormBuilder
    , private adviserService: AdviserService
    , private parametricService: ParametricsService
    , private _snackBar: MatSnackBar
    ,  public dialogRef: MatDialogRef<AdviserEditComponent>,
    @Inject(MAT_DIALOG_DATA) public adviser: AdviserDto) {

    this.form = this.formBuilder.group({
      name: '',
      email: '',
      phone:'',
      zones: new UntypedFormControl([])
    });
  }

  ngOnInit(): void {

    
    this.parametricService.getZone().subscribe(zones => {
      this.zones = zones;
    this.adviserService.getZonesByAdviser(this.adviser.id).subscribe(data => {
      
      this.form?.get('zones')?.patchValue(data);
    })
    
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
    this.adviser.base64Image = e.target.result;
  }

  edit() {
    const file: File = this.fileInput?.nativeElement.files[0];
    const formData = new FormData();
    formData.append('name', this.form?.get('name')?.value);
    formData.append('email', this.form?.get('email')?.value);
    formData.append('cellPhone', this.form?.get('phone')?.value);
    formData.append('imageFile', file);
    formData.append('zones', this.form?.get('zones')?.value);

    this.adviserService.editAdviser(formData).subscribe(data => {
      this._snackBar.open("Agente inmobiliario creado correctamente", "Cerrar");
    })
  }
}
