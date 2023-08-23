import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'bs-dialog-services',
  templateUrl: './dialog-services.component.html',
  styleUrls: ['./dialog-services.component.scss']
})
export class DialogServicesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)
  }

  ngOnInit(){
  }

}
