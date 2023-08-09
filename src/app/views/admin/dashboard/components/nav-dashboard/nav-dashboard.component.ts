import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'bs-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrls: ['./nav-dashboard.component.scss']
})
export class NavDashboardComponent implements OnInit{

  @Input() draw:any;
  public userName:string | undefined = "";

  constructor(private authService : AuthService){

  }

  ngOnInit():void{
    this.userName = this.authService.userLogged.userName?.toLowerCase();
  }

  logout() {
    this.authService.logout();
  }

}
