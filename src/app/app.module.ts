
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {MyserviceService} from './myservice.service'
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { RouterModule, Routes } from '@angular/router';
import {TokenInterceptor} from './auth/token.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthService} from'./auth/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AngularmaterialModule} from './angularmaterial/angularmaterial.module';
import { GoogleAuthComponent } from './google-auth/google-auth.component';
import{MatFormFieldControl} from '@angular/material';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register',component: RegisterComponent},
  { path: 'chat', component:ChatComponent},
  {path: 'dashboard',component:DashboardComponent },
  {path:'auth',component:GoogleAuthComponent}
 
];


@NgModule({
  declarations:[ 
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ChatComponent,
    DashboardComponent,
    GoogleAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularmaterialModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    MyserviceService,
    AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
