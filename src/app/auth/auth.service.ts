import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  public  getToken():string
  {
    //RETURN TOKEN.....
    return localStorage.getItem('token');
  }

 public isAuthenticated()
 {
  const token=this.getToken;
  
}
}
