import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService, UserLogged } from 'src/app/auth/auth.service';
import { LoginService } from 'src/app/auth/login.service';
import { User } from 'src/app/models/User';
import { MENUOPTIONS } from 'src/app/shared/const/menu.const';
import { PAGE_URL } from 'src/app/shared/const/pageUrl';

@Component({
  selector: 'bs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged?:boolean;
  user:User;

  constructor(private loginService: LoginService,
    private authService:AuthService,
    private router:Router,
    private spinner: NgxSpinnerService) {
    this.user = new User();
  }


  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([`/${PAGE_URL.DASHBOARD}`])
    } else {
      this.isLogged = false;
     
    }

  }

  onSubmit() {
    this.spinner.show();
    this.isLogged =true;

    if(this.user?.userName == null  || this.user?.password == ""){
    this.spinner.hide();
   console.log("error inicio sesion")
   this.isLogged =false;
   return;
  }

  this.loginService.login(this.user).subscribe( (response:UserLogged) =>{
    this.authService.saveToken(""+response.token);
    this.authService.saveUser(response);
    if(response){
      this.router.navigate([`${PAGE_URL.DASHBOARD}`])
    }
  });
  }

}
