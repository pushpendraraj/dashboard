import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { RestaurantComponent } from '../app/restaurant/restaurant.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import { AboutComponent } from '../app/about/about.component';
import { BlogComponent } from '../app/blog/blog.component';

const appRoutes: Routes = [
    {
        path:'',
        component:HomeComponent,
        data:{title:'Home'}
    },
    {
        path:'restaurant',
        component:RestaurantComponent,
        data:{title:'Restaurant'}
    },
    {
        path:'about',
        component:AboutComponent,
        data:{title:'About Us'}
    },
    {
        path:'blogs',
        component:BlogComponent,
        data:{title:'Blogs'}
    },
    {
        path:'**',
        component:PageNotFoundComponent,
        data:{title:'Page Not Found'}
    }
];

export const Routing = RouterModule.forRoot(appRoutes,{ useHash: true, enableTracing:false });