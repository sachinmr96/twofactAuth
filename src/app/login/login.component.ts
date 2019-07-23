import { Component, OnInit } from '@angular/core';
import {AbstractControl,FormGroup, FormControl, Validators} from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  loginForm: FormGroup;
  sucessMessage=''
  twofactEnable=false
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required)
    });

  }

  ngOnInit() {
  }

  isValid(controlName) {
    console.log('exceute');
    console.log(controlName);
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login()
  {
    if(this.loginForm.valid){
    this._myservice.loginService(this.loginForm.value)
    .subscribe(
      data=>
      {
        localStorage.setItem('token',data.toString())
        this._router.navigate(['/auth'],{relativeTo:this._activatedRoute})
      },
      erorr=>{
        this.sucessMessage='INVALID USER NAME AND PASSWORD'
        this._router.navigate(['/login'],{relativeTo:this._activatedRoute})
      }
    )
    }
  }
  movetoregister()
  {
    this._router.navigate(['/register'],{relativeTo:this._activatedRoute})
  }

}
