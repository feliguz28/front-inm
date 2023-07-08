import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Home, PaginateHome } from 'src/app/models/home.interface';
import { PagerRequest } from 'src/app/models/pager.interface';
import { HomeService } from 'src/app/services/home.service';

interface Tarjeta {
  nombre: string;
  zona: string;
  tipoInmueble: string;
  precio: number;
  categoria: string;
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

  constructor(private router: Router, private homeService: HomeService,) {
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
        nombre: `Vivienda ${home.name}`,
        zona: `Zona ${home.zoneId}`,
        tipoInmueble: `Tipo ${home.homeTypeId}`,
        precio: home.price,
        categoria: `Categoría ${home.categoryId}`,
        home: home
      }));
    });
  }

  editarTarjeta(id: any) {
    this.router.navigate(['/dashboard/editHome', id]);
    console.log(id);
  }

  eliminarTarjeta(tarjeta: Tarjeta) {
    // Lógica para eliminar la tarjeta
    console.log('Eliminar tarjeta:', tarjeta.home);
  }

  inactivarTarjeta(tarjeta: Tarjeta) {
    // Lógica para inactivar/activar la tarjeta
    tarjeta.home.status = !tarjeta.home.status;
    console.log('Inactivar tarjeta:', tarjeta.home);
  }

  mostrarInformacion(tarjeta: Tarjeta) {
    // Lógica para mostrar más información de la tarjeta
    console.log('Mostrar información de la tarjeta:', tarjeta.home);
  }

  crearNuevoInmueble() {
    // Lógica para crear un nuevo inmueble
    console.log('Crear nuevo inmueble');
  }
}