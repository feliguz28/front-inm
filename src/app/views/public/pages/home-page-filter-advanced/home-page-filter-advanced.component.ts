import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginateHome } from 'src/app/models/home.interface';
import { PagerRequestFilter } from 'src/app/models/pager-basic.interface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'bs-home-page-filter-advanced',
  templateUrl: './home-page-filter-advanced.component.html',
  styleUrls: ['./home-page-filter-advanced.component.scss']
})
export class HomePageFilterAdvancedComponent implements OnInit{
  receivedObject?: any;

  length: number = 0;
  page: number = 1;
  pageSize: number = 10;
  filter: string = '';
  paginateHome!: PaginateHome
  pageSizeOptions: number[] = [5, 10, 20, 50, 100]

  constructor(private router: Router
    ,private homeService : HomeService) {
    this.receivedObject = this.router.getCurrentNavigation()?.extras.state;

    
  }
  
  ngOnInit(): void {
    this.initHomesList();
  }


  initHomesList(){
    
    let pagerRequest = this.receivedObject as PagerRequestFilter;

    pagerRequest.filter = this.filter;
    pagerRequest.pageNumber = this.page;
    pagerRequest.registerPage = this.pageSize;
    
    this.homeService.getHomeFilter( pagerRequest,0).subscribe(data => {
      this.paginateHome = data;
      this.length = data.totalCount;
      console.log(data)
    });
  }
}
