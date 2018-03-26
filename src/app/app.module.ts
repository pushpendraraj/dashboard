import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './data.service';
import { Routing } from '../app/app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantComponent,
    PageNotFoundComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BootstrapModalModule.forRoot({container:document.body})
  ],
  entryComponents:[LoginComponent, RegisterComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
