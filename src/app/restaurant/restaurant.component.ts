import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
// import { RestaurantFilterPipe } from '../restaurant-filter.pipe';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurants = [];
  constructor(private dataService : DataService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.dataService.getRestaurants().subscribe(
      data=>{
        this.spinnerService.show();
        this.restaurants = data;
      },
      err =>{
        this.spinnerService.hide();
      },
      ()=>{
       this.spinnerService.hide();
      }
    );
  }
}
