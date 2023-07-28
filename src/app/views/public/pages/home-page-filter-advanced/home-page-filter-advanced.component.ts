import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagerRequestFilter } from 'src/app/models/pager-basic.interface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'bs-home-page-filter-advanced',
  templateUrl: './home-page-filter-advanced.component.html',
  styleUrls: ['./home-page-filter-advanced.component.scss']
})
export class HomePageFilterAdvancedComponent implements OnInit{
  receivedObject?: any;

  constructor(private router: Router
    ,private homeService : HomeService) {
    this.receivedObject = this.router.getCurrentNavigation()?.extras.state;
  }
  
  ngOnInit(): void {
    let pageRequest = new PagerRequestFilter();


    // this.homeService.getHomeFilter(1)
  }
}
