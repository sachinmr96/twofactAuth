import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  sucssesMessage=''
  
  constructor(private MyserviceService:MyserviceService,
    private router:Router, private activatedRouter:ActivatedRoute ) {
    this.MyserviceService.getUserName()
    .subscribe(
      data => 
      {
        this.sucssesMessage = 'Authorized page'
      },
      
      error =>{ this.sucssesMessage = "Unauthorized Page"
      this.router.navigate(['/login'],{relativeTo:this.activatedRouter})
      }
    )
   
   }

  ngOnInit() {
  }
  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/login'],{relativeTo:this.activatedRouter})
  }


}
