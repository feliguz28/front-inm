import { Component } from '@angular/core';
import { MENUOPTIONS } from 'src/app/shared/const/menu.const';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  showFiller = false;
  public menuOptions = MENUOPTIONS ;

  public category : string= "Arriendo";
  getRange(count: number): number[] {
    return Array.from({ length: count }, (_, index) => index + 1);
  }
}
