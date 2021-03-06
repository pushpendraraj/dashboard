import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './data.service';
import { Routing } from '../app/app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {NgxLocalStorageModule} from 'ngx-localstorage';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogCommentsComponent } from './blog-comments/blog-comments.component';
import { RestaurantFilterPipe } from './restaurant-filter.pipe';
import { OtpComponent } from './otp/otp.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginWithOptComponent } from './login-with-opt/login-with-opt.component';
import { AddressComponent } from './profile/address/address.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { OrderComponent } from './profile/order/order.component';
import { ReviewRatingComponent } from './profile/review-rating/review-rating.component';
import { PhotosComponent } from './profile/photos/photos.component';
import { VideosComponent } from './profile/videos/videos.component';
import { WalletComponent } from './profile/wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantComponent,
    PageNotFoundComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    BlogComponent,
    BlogDetailsComponent,
    BlogCommentsComponent,
    RestaurantFilterPipe,
    OtpComponent,
    ProfileComponent,
    ForgotComponent,
    LoginWithOptComponent,
    AddressComponent,
    EditProfileComponent,
    OrderComponent,
    ReviewRatingComponent,
    PhotosComponent,
    VideosComponent,
    WalletComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    NgxLocalStorageModule.forRoot(),
    Routing,
    HttpModule,
    FormsModule,
    NgxSpinnerModule,
    BootstrapModalModule.forRoot({container: document.body})
  ],
  entryComponents: [LoginComponent, RegisterComponent, OtpComponent, ForgotComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
