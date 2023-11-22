import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PAGE_URL } from '../shared/const/pageUrl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private keyToken = "token";
  private keyUser = "user";

  constructor(private router: Router) { }

  isAuthenticated(): boolean{
    let objectPayload = this.getDataToken(this.token);
    if(!objectPayload){
      return false;
    }
    return true;
  }

  getDataToken(accessToken: string | null): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null
  }

  isAdmin():boolean {

    var is: boolean = false;

    this.userLogged.roles?.forEach(r => {
      if(r === "Admin"){
        is = true;
      }
    });
    
    return is;
  }

  saveToken(accesToken: string | null): void {
    sessionStorage.setItem(this.keyToken, ""+accesToken);
  }

  saveUser(authToken: UserLogged): void {
    sessionStorage.setItem("user", JSON.stringify(authToken));
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate([`${PAGE_URL.PUBLIC_LOGIN}`]);
  }

  get userLogged(): UserLogged {
    const storedItem = sessionStorage.getItem(this.keyUser);
    var user = new UserLogged();
    if (storedItem == null) {
      this.router.navigate([`${PAGE_URL.PUBLIC_LOGIN}`]);
    } else {
      user = JSON.parse(storedItem) as UserLogged;
    }
    return user;
  }

  get token():string | null{
    if(sessionStorage.getItem(this.keyToken)!=null ){
      return sessionStorage.getItem(this.keyToken);
    }
    sessionStorage.clear();
    return null;
  }
    
}

export class UserLogged {
  userName?: string;
  roles?: Array<string> | undefined;
  token?: string;
}
