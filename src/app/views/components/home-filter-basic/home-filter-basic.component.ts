import { Component } from '@angular/core';
import { PaginateHome } from 'src/app/models/home.interface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-filter-basic',
  templateUrl: './home-filter-basic.component.html',
  styleUrls: ['./home-filter-basic.component.scss']
})
export class HomeFilterBasicComponent {

  
  length: number = 0;
  page: number = 1;
  pageSize: number = 10;
  filter: string = '';
  paginateHome!: PaginateHome
  pageSizeOptions: number[] = [5, 10, 20, 50, 100]

  constructor(private homeService: HomeService) {

  }

  getHomeBasicFilter(){
    // this.homeService.getHomeFilterBasic().subscribe(data => {
    //   this.paginateHome = data;
    //   this.length = data.totalCount;
    // });
  }

}
