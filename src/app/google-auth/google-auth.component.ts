import { Component, OnInit } from '@angular/core';
import {AbstractControl,FormGroup, FormControl, Validators} from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css']
})
export class GoogleAuthComponent implements OnInit {

  authForm: FormGroup;
  sucessMessage='';
  tfa={ }
  failureMessage=""
  constructor(private MyserviceService:MyserviceService,
    private router:Router,private activetedRouter:ActivatedRoute) {
    
    this.authForm = new FormGroup({
      token: new FormControl(null, Validators.required),
     
    });

    
   MyserviceService.generateCode()
    .subscribe(
      data =>{
       this.tfa=data;
       console.log(this.tfa);
      },
      error =>{ this.sucessMessage='failure'
      this.router.navigate(['/login'],{relativeTo:this.activetedRouter})
    }

    )
    
   }

  ngOnInit() {
  }
  isValid(controlName) {
    return this.authForm.get(controlName).invalid && this.authForm.get(controlName).touched;
  }

  verifyCode()
  {
      this.MyserviceService.verifyCodeService(this.authForm.value)
      .subscribe(
        data=>{this.router.navigate(['/chat'],{relativeTo:this.activetedRouter})},
        error =>{

          this.router.navigate(['/login'],{relativeTo:this.activetedRouter})
      console.log(error);
        }
      )
  }

}
