import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurants = [];
  pageTitle = 'Restaurants';
  breadcrumb = `<a class="breadcrumb-item" href="#">Home</a>
  <span class="breadcrumb-item active">Restaurants</span>`;
  cuisines = [];
  restaurantName = '';
  cuisineName = '';
  resCuisine = '';
  selectedIndex = -1;
  minOrderUpto = [1,2,3,4,5];
  minOrder = 0;
  constructor(
    private dataService: DataService,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    this.getCuisines();
    this.getRestaurants();
  }

  getRestaurants() {
    this.spinnerService.show();
    this.dataService.getRestaurants().subscribe(
      (data) => {
        const tempArr = [];
        const ctempArr = [];
        data.forEach(restaurant => {
          if (restaurant.cuisine_id !== undefined && restaurant.cuisine_id !== '') {
            this.dataService.geCuisinesByIds(restaurant.cuisine_id).subscribe((cdata) => {
              for (let i = 0; i < cdata.length; i++) {
                ctempArr.push(cdata[i].cuisine_name);
              }
              restaurant.cusineNames = ctempArr.join(', ');
            });
          }
          tempArr.push(restaurant);
        });
        this.restaurants = tempArr;
      },
      (err) => {
        this.spinnerService.hide();
      },
      () => {
       this.spinnerService.hide();
      }
    );
  }

  getCuisines() {
    this.spinnerService.show();
    this.dataService.getCuisines()
    .subscribe(
      (data) => {
        this.cuisines = data;
      },
      (err) => {
        this.spinnerService.hide();
      },
      () => {
        this.spinnerService.hide();
      });
  }

  showToggle(resid) {
    if(this.selectedIndex ===-1){
      this.selectedIndex = resid;
    }else{
      this.selectedIndex = -1;
    }
  }

}
