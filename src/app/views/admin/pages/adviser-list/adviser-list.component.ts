import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdviserDto } from 'src/app/models/Adviser';
import { AdviserService } from 'src/app/services/adviser.service';
import { AdviserEditComponent } from './adviser-edit/adviser-edit.component';
import { AdviserDeletedComponent } from './adviser-deleted/adviser-deleted.component';

@Component({
  selector: 'app-adviser-list',
  templateUrl: './adviser-list.component.html',
  styleUrls: ['./adviser-list.component.scss']
})
export class AdviserListComponent {

  advisers?:AdviserDto[];
  adviderDeleted?:AdviserDto;

  constructor(private adviserService: AdviserService, public dialog: MatDialog){

  }

  ngOnInit(): void {
    this.getAdviser();
  }

  getAdviser(){
    this.adviserService.getAdvisers().subscribe(data =>{
      this.advisers = data;
    });
  }

  openEdit(adviser: AdviserDto): void {
    const dialogRef = this.dialog.open(AdviserEditComponent, {
      width: '700px',
      data: adviser,
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  delete(adviser: AdviserDto):void{
    this.dialog.open(AdviserDeletedComponent, {
      width: '700px',
      data:adviser
    });
  }

}
