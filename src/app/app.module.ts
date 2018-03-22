import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent,
    data: { title: 'Home ! ' }
  },
  { path: 'restaurant',
    component: RestaurantComponent,
    data: { title: 'Restaurant ! ' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
