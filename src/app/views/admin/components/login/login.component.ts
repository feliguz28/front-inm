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
  errorLogin?:string;
  public statusSpinner?:boolean = false;

  constructor(private loginService: LoginService,
    private authService:AuthService,
    private router:Router,
    private spinner: NgxSpinnerService) {
    this.user = new User();
  }


  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      
      this.router.navigate([`/${PAGE_URL.DASHBOARD_HOME}`]);

    } else {
      this.isLogged = false;
     
    }

  }

  onSubmit() {
    this.spinner.show();
    this.isLogged =true;
    this.statusSpinner = true;
    if(this.user?.userName == null  || this.user?.password == ""){
    this.spinner.hide();
   this.isLogged =false;
   return;
  }

  this.loginService.login(this.user).subscribe( (response:UserLogged) =>{
    this.authService.saveToken(""+response.token);
    this.authService.saveUser(response);
    if(response){
      if(this.authService.isAdmin()){
        this.statusSpinner = false;
        this.errorLogin = '';
        this.router.navigate([`${PAGE_URL.DASHBOARD_HOME}`]);
      }
    }
  },
  (error)=>{
    this.errorLogin = error.error;
    this.statusSpinner = false;
  });
  }

}
