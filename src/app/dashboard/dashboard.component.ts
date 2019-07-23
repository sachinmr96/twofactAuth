import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sucssesMessage=''
  constructor(private myservice:MyserviceService,
    private router:Router, private activatedRouter:ActivatedRoute ) {
    this.myservice.dashboardPage()
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

}
