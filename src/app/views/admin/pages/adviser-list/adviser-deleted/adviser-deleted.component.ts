import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdviserDto } from 'src/app/models/Adviser';
import { AdviserService } from 'src/app/services/adviser.service';

@Component({
  selector: 'app-adviser-deleted',
  templateUrl: './adviser-deleted.component.html',
  styleUrls: ['./adviser-deleted.component.scss']
})
export class AdviserDeletedComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public adviser: AdviserDto
  ,private dialogRef: MatDialogRef<AdviserDeletedComponent>
  ,private adviserService: AdviserService
  ,private _snackBar: MatSnackBar){

  }

  confirmDeleted(){
     this.adviserService.deletedAdviser(this.adviser.id).subscribe(data => {
      
      this._snackBar.open(data.message, "Cerrar");
      this.dialogRef.close();

      setTimeout(() => {
        location.reload();
      }, 2000); 

    });
  }

}
