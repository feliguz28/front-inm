import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Home, PaginateHome } from 'src/app/models/home.interface';

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

  constructor(private dialog: MatDialog) {
    // Crear array de objetos Home mock
    const homes: Home[] = [
      {
        id: 1,
        categoryId: 1,
        description: 'Descripción de la vivienda 1',
        discount: 0,
        homeStateId: 1,
        homeTypeId: 1,
        name: 'test',
        price: 100000,
        status: true,
        zoneId: 1,
        address: {
          id: 1,
          homeTypeAddressId: 'A',
          identificationHome: 123,
          letterBlock: '',
          letterVia: 'A',
          numberBlock: 1,
          numberVia: 10,
          prefix: '',
          suffix: '',
          viaId: 1
        },
        details: {
          id: 1,
          bathRoom: 2,
          measures: 100,
          parking: 1,
          room: 3,
          stratum: 3
        }
      },
      {
        id: 2,
        categoryId: 2,
        description: 'Descripción de la vivienda 2',
        discount: 10,
        homeStateId: 1,
        homeTypeId: 2,
        name: 'test',
        price: 200000,
        status: true,
        zoneId: 2,
        address: {
          id: 2,
          homeTypeAddressId: 'B',
          identificationHome: 456,
          letterBlock: '',
          letterVia: 'B',
          numberBlock: 2,
          numberVia: 20,
          prefix: '',
          suffix: '',
          viaId: 2
        },
        details: {
          id: 2,
          bathRoom: 1,
          measures: 80,
          parking: 0,
          room: 2,
          stratum: 2
        }
      },
      {
        id: 3,
        categoryId: 1,
        description: 'Descripción de la vivienda 3',
        discount: 5,
        homeStateId: 1,
        homeTypeId: 3,
        name: 'test',
        price: 150000,
        status: true,
        zoneId: 1,
        address: {
          id: 3,
          homeTypeAddressId: 'C',
          identificationHome: 789,
          letterBlock: '',
          letterVia: 'C',
          numberBlock: 3,
          numberVia: 30,
          prefix: '',
          suffix: '',
          viaId: 3
        },
        details: {
          id: 3,
          bathRoom: 2,
          measures: 120,
          parking: 1,
          room: 4,
          stratum: 4
        }
      }
    ];

    const paginateHome: PaginateHome = {
      items: homes,
      totalCount: homes.length,
    };

    // Crear tarjetas con los campos adicionales
    this.tarjetas = homes.map(home => ({
      nombre: `Vivienda ${home.id}`,
      zona: `Zona ${home.zoneId}`,
      tipoInmueble: `Tipo ${home.homeTypeId}`,
      precio: home.price,
      categoria: `Categoría ${home.categoryId}`,
      home: home
    }));
  }

  editarTarjeta(tarjeta: Tarjeta) {
    // Lógica para editar la tarjeta
    console.log('Editar tarjeta:', tarjeta.home);
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