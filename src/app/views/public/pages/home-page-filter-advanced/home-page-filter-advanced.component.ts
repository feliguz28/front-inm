import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginateHome } from 'src/app/models/home.interface';
import { PagerRequestFilter } from 'src/app/models/pager-basic.interface';
import { ArrayParametric } from 'src/app/models/parametric.interface';
import { HomeService } from 'src/app/services/home.service';
import { ParametricsService } from 'src/app/services/parametrics.service';

@Component({
  selector: 'bs-home-page-filter-advanced',
  templateUrl: './home-page-filter-advanced.component.html',
  styleUrls: ['./home-page-filter-advanced.component.scss']
})
export class HomePageFilterAdvancedComponent implements OnInit {
  receivedObject?: any;

  length: number = 0;
  page: number = 1;
  pageSize: number = 10;
  filter: string = '';
  paginateHome!: PaginateHome
  pageSizeOptions: number[] = [5, 10, 20, 50, 100]
  param?: string;
  categories!: ArrayParametric;
  pagerRequest!: PagerRequestFilter;

  constructor(private router: Router
    , private route: ActivatedRoute
    , private homeService: HomeService
    , private parametricService: ParametricsService) {

    this.receivedObject = this.router.getCurrentNavigation()?.extras.state;

    this.route.params.subscribe(params => {
      this.param = params['filter'];
    });

    if (this.receivedObject) {
      this.pagerRequest = this.receivedObject;
      this.pagerRequest.filter = this.filter;
      this.pagerRequest.pageNumber = this.page;
      this.pagerRequest.registerPage = this.pageSize;
    }

    if (this.param) {
      this.pagerRequest = new PagerRequestFilter();
      this.pagerRequest.filter = this.filter;
      this.pagerRequest.pageNumber = this.page;
      this.pagerRequest.registerPage = this.pageSize;
    }

  }

  ngOnInit(): void {

    this.parametricService.getCategories().subscribe(data => {
      this.categories = data;

      switch (this.param) {

        case 'venta':
          let idv = this.categories.find(c => c.name == 'Venta')?.id;
          this.pagerRequest.homeCategoryIdString = '' + idv
          this.search(this.pagerRequest, 1)
          break;

        case 'arriendo':

          let ida = this.categories.find(c => c.name == 'Arriendo')?.id
          this.pagerRequest.homeCategoryIdString = '' + ida
          this.search(this.pagerRequest, 1)

          break;

        case undefined:
          this.initHomesList();
          break;
      }

    })


  }


  initHomesList() {
    this.search(this.pagerRequest, 0)
  }

  updateSearch(pagerRequest: PagerRequestFilter) {
    pagerRequest.filter = this.filter;
    pagerRequest.pageNumber = this.page;
    pagerRequest.registerPage = this.pageSize;
    this.search(pagerRequest, 1)
  }

  search(pagerRequest: PagerRequestFilter, typeFilter: number) {
    this.homeService.getHomeFilter(pagerRequest, typeFilter).subscribe(data => {
      this.paginateHome = data;
      this.length = data.totalCount;
      console.log(data)
    });
  }
}
