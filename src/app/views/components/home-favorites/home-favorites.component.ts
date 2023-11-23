import { Component } from '@angular/core';
import { PagerRequest, PaginateHome } from 'src/app/models/pager.interface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'bs-home-favorites',
  templateUrl: './home-favorites.component.html',
  styleUrls: ['./home-favorites.component.scss']
})
export class HomeFavoritesComponent {

  length: number = 0;
  page: number = 1;
  pageSize: number = 10;
  filter: string = '';
  paginateHome!: PaginateHome
  pageSizeOptions: number[] = [5, 10, 20, 50, 100]

  constructor(private homeService: HomeService){
    this.getHomeFavorites();
  }

  getHomeFavorites(){
    let pager: PagerRequest = {
      pageNumber: this.page,
      registerPage: this.pageSize,
      filter: this.filter
    };

    this.homeService.getAllHomesFavorites(pager).subscribe(data => {
      this.paginateHome = data;
      this.length = data.totalCount;

    });
  }

  pageEvent(event: any): void {
		this.pageSize = event.pageSize;
		this.page = event.pageIndex + 1;
		this.getHomeFavorites();
	}

}
