import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrls: ['./nav-dashboard.component.scss']
})
export class NavDashboardComponent {

  @Input() draw:any;
  public userName:string = "Luis Alejandro";
}
