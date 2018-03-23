import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { RestaurantComponent } from '../app/restaurant/restaurant.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import { AboutComponent } from '../app/about/about.component';

const appRoutes: Routes = [
    {
        path:'',
        component:HomeComponent,
        data:{'sectionClass':'intro'}
    },
    {
        path:'restaurant',
        component:RestaurantComponent,
        data:{'sectionClass':'intro_bg'}
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'**',
        component:PageNotFoundComponent
    }
];

export const Routing = RouterModule.forRoot(appRoutes,{ useHash: true, enableTracing:false });