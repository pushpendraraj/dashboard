import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { RestaurantComponent } from '../app/restaurant/restaurant.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import { AboutComponent } from '../app/about/about.component';

const appRoutes: Routes = [
    {
        path:'',
        component:HomeComponent,
        data:{'sectionClass':'intro', 'title':'Home'}
    },
    {
        path:'restaurant',
        component:RestaurantComponent,
        data:{'sectionClass':'intro_bg', 'title':'Restaurant'}
    },
    {
        path:'about',
        component:AboutComponent,
        data:{'sectionClass':'intro_bg', 'title':'About Us'}
    },
    {
        path:'**',
        component:PageNotFoundComponent,
        data:{'sectionClass':'intro_bg', 'title':'Page Not Found'}
    }
];

export const Routing = RouterModule.forRoot(appRoutes,{ useHash: true, enableTracing:false });