import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { RestaurantComponent } from '../app/restaurant/restaurant.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import { AboutComponent } from '../app/about/about.component';
import { BlogComponent } from '../app/blog/blog.component';
import { ProfileComponent } from '../app/profile/profile.component';
import { AddressComponent } from '../app/profile/address/address.component';
import { OrderComponent } from '../app/profile/order/order.component';
import { EditProfileComponent } from '../app/profile/edit-profile/edit-profile.component';
import { PhotosComponent } from '../app/profile/photos/photos.component';
import { ReviewRatingComponent } from '../app/profile/review-rating/review-rating.component';
import { VideosComponent } from '../app/profile/videos/videos.component';
import { WalletComponent } from '../app/profile/wallet/wallet.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {title: 'Home'}
    },
    {
        path: 'restaurant',
        component: RestaurantComponent,
        data: {title: 'Restaurant'}
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {title: 'About Us'}
    },
    {
        path: 'blogs',
        component: BlogComponent,
        data: {title: 'Blogs'}
    },
    {
        path: 'profile',
        component: ProfileComponent,
        data: {title: 'Profile'},
        children: [
          {
            path: 'orders',
            component: OrderComponent,
            data: {title: 'Orders'}
          },
          {
            path: 'address',
            component: AddressComponent,
            data: {title: 'Addresses'}
          },
          {
            path: 'edit',
            component: EditProfileComponent,
            data: {title: 'Edit'}
          },
          {
            path: 'reviews-ratings',
            component: ReviewRatingComponent,
            data: {title: 'Review-Rating'}
          },
          {
            path: 'wallet',
            component: WalletComponent,
            data: {title: 'Wallet'}
          },
          {
            path: 'photos',
            component: PhotosComponent,
            data: {title: 'Photos'}
          },
          {
            path: 'videos',
            component: VideosComponent,
            data: {title: 'Videos'}
          }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: {title: 'Page Not Found'}
    }
];

export const Routing = RouterModule.forRoot(appRoutes, { useHash: true, enableTracing: false });
