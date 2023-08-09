import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Home, PaginateHome } from 'src/app/models/home.interface';
import { PagerRequest } from 'src/app/models/pager.interface';
import { HomeService } from 'src/app/services/home.service';
import { MatDialog } from '@angular/material/dialog';
import { HomeInfoComponent } from '../../components/home/home-info/home-info.component';


interface Tarjeta {
  name: string;
  zone: any;
  typeHome: any;
  price: number;
  category: any;
  home: Home;
}

@Component({
  selector: 'app-home-managment',
  templateUrl: './home-managment.component.html',
  styleUrls: ['./home-managment.component.scss']
})
export class HomeManagmentComponent {
  tarjetas: Tarjeta[] = [];

  length: number = 0;
  page: number = 1;
  pageSize: number = 10;
  filter: string = '';
  paginateHome!: PaginateHome
  pageSizeOptions: number[] = [5, 10, 20, 50, 100]

  constructor(
    private router: Router, 
    private homeService: HomeService,
    private dialog: MatDialog
    ) {
    this.getAllHomes();
  }

  pageEvent(event: any): void {
		this.pageSize = event.pageSize;
		this.page = event.pageIndex + 1;
		this.getAllHomes();
	}

  getAllHomes() {
    let pager: PagerRequest = {
      pageNumber: this.page,
      registerPage: this.pageSize,
      filter: this.filter
    };

    this.homeService.getAllHomes(pager).subscribe(data => {
      this.paginateHome = data;
      this.length = data.totalCount;

      this.tarjetas = this.paginateHome.items.map(home => ({
        id: home.id,
        name: home.name,
        zone: home.zoneId,
        typeHome: home.homeTypeId,
        price: home.price,
        category: home.categoryId,
        home: home
      }));
    });
  }

  openHomeDialog(home: Home) {
    const dialogRef = this.dialog.open(HomeInfoComponent, {
      data: home
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Lógica después de cerrar el diálogo (si es necesario)
    });
  }

  createNewHome() {
    this.router.navigate(['/dashboard/createHome']);
  }

  editHome(id: any) {
    this.router.navigate(['/dashboard/editHome', id]);
  }

  deleteHome(id: string) {
    this.homeService.deleteHome(id).subscribe(data=>{
    })
    this.getAllHomes();
  }

  updateStatus(id: string) {
    this.homeService.editHomeStatus(id).subscribe(data => {
      this.getAllHomes();
    })
  }

  updateFavorite(id: string) {
    this.homeService.editHomeFavorite(id).subscribe(data => {
      this.getAllHomes();
    })
  }

  showInfo(id: string) {
    this.homeService.getHomeById(id).subscribe(home => {
      this.openHomeDialog(home);
    });
  }
}