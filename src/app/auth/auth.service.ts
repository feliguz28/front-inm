import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private keyToken = "token";
  private keyUser = "user";

  constructor() { }

  isAuthenticated(): boolean{
    let objectPayload = this.getDataToken(this.token);
    return true;
  }

  getDataToken(accessToken: string | null): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null
  }

  isAdmin() {
    const role = this.userLogged.role
    return true;
  }

  saveToken(accesToken: string | null): void {
    sessionStorage.setItem(this.keyToken, ""+accesToken);
  }

  saveUser(authToken: UserLogged): void {
    sessionStorage.setItem("user", JSON.stringify(authToken));
  }

  logout(): void {
    sessionStorage.clear();
    location.reload();
  }

  get userLogged(): UserLogged {
    const storedItem = sessionStorage.getItem(this.keyUser);
    var user = new UserLogged();
    if (storedItem == null) {
      this.logout();
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
  role?: Array<string>;
  token?: string;
}
