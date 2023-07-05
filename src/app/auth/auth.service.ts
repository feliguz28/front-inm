import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private keyToken = "token";

  constructor() { }

  isAdmin(){
    return true;
  }

  saveToken(accesToken:string):void{
    sessionStorage.setItem(this.keyToken,accesToken); 
}

saveUser(authToken:UserLogged):void{
  sessionStorage.setItem("keyUser",JSON.stringify(authToken)); 
}

logout():void{
  sessionStorage.clear();
  location.reload(); 
}

}

export class UserLogged{
  userName?:string;
  role?:string[];
  token?:string;
}
