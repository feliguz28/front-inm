import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginateHome } from 'src/app/models/home.interface';
import { PagerRequestFilter } from 'src/app/models/pager-basic.interface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-homes-filter-advanced',
  templateUrl: './homes-filter-advanced.component.html',
  styleUrls: ['./homes-filter-advanced.component.scss']
})
export class HomesFilterAdvancedComponent {
  filterParam?: string | null;
  length: number = 0;
  page: number = 1;
  pageSize: number = 10;
  filter: string = '';
  paginateHome!: PaginateHome
  pageSizeOptions: number[] = [5, 10, 20, 50, 100]

  constructor(private route: ActivatedRoute
    ,private homeService : HomeService) { }

  ngOnInit(): void {

    this.filterParam = this.route.snapshot.paramMap.get('filter');

    this.initFilter();

  }

  private initFilter() {
    let pager = new PagerRequestFilter();
    pager.pageNumber = this.page;
    pager.registerPage = this.pageSize;

    switch (this.filterParam) {

      case 'ventas':
        pager.HomeCategoryIdString = "0";
        break;

      case 'arriendos':
        pager.HomeCategoryIdString = "1";
        break;

    }

    this.homeService.getHomeFilter(pager, 0).subscribe(data => {
      this.paginateHome = data;
      this.length = data.totalCount;
      console.log(data);
    });
  }
}
