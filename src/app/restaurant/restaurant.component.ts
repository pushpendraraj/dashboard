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
