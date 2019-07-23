import { Injectable } from '@angular/core';
import{HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  submitToRegister(body:any)
  {
    return this.http.post('http://localhost:4000/users/register',body,{
      observe:'body'
    })
  }


  loginService(body:any)
  {
    return this.http.post('http://localhost:4000/users/login',body,{
      observe:'body'
    })
  }

  getUserName()
  {
    return this.http.get('http://localhost:4000/users/chat',{
      observe:'body'
    })
  }

  dashboardPage()
  {
    return this.http.get('http://localhost:4000/users/dashboard',{
      observe:'body'
    })
  }

  verifyCodeService(body:any)
  {
    return this.http.post('http://localhost:4000/users/verify',body,{
      observe:'body'
    })
  }

  generateCode()
  {
    return this.http.get('http://localhost:4000/users/getCode',{
      observe:'body'
    })
  }
  
}
