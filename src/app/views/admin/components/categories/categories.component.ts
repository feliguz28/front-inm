import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  @Input() public category?: string;

}
