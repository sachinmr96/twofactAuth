import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MyserviceService} from '../myservice.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm:FormGroup;
  successMessage='';
  err=false
  constructor(private MyserviceService:MyserviceService,
    private router:Router,
    private activatedRouter:ActivatedRoute
    ) {
    this.myForm=new FormGroup({
      email:new FormControl(null,Validators.email),
      username:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required)
    })
   }

  ngOnInit() {
  }

  isValid(controlName)
  {
    return this.myForm.get(controlName).invalid || this.myForm.get(controlName).untouched;
  }

  register()
  {
    if(this.myForm.valid){
    this.MyserviceService.submitToRegister(this.myForm.value)
    .subscribe(
      data =>{
         this.successMessage='sucessfully registered'
         this.err=false
         
      },
      error =>
      {this.successMessage="Already this account exist!"
      this.err=true
    }
    )
    }
  }


}
