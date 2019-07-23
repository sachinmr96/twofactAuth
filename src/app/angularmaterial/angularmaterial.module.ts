import { NgModule } from '@angular/core';
import {MatButtonModule,MatMenuModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';


const AngularComponent=[
  MatButtonModule,MatMenuModule,MatCardModule,MatFormFieldModule
]

@NgModule({
  imports: [AngularComponent],
  exports: [
    AngularComponent
  ]
})
export class AngularmaterialModule { }
