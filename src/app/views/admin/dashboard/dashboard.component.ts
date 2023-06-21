import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  showFiller = false;

  public category : string= "Arriendo";
  getRange(count: number): number[] {
    return Array.from({ length: count }, (_, index) => index + 1);
  }
}
