import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrzyciskComponent } from './przycisk/przycisk.component';
import { CaruselComponent } from './carusel/carusel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarLogComponent } from './navbar-log/navbar-log.component';
import { Hero1Component } from './hero1/hero1.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormComponent } from './form/form.component';
import { Hero2Component } from './hero2/hero2.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginComponent } from './login/login.component';
import { LoggedPageComponent } from './logged-page/logged-page.component';
import { FuncsService } from './funcs.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    PrzyciskComponent,
    CaruselComponent,
    FooterComponent,
    NavbarLogComponent,
    Hero1Component,
    MainComponent,
    HomeComponent,
    RegistrationComponent,
    FormComponent,
    Hero2Component,
    ErrorpageComponent,
    LoginComponent,
    LoggedPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FuncsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
