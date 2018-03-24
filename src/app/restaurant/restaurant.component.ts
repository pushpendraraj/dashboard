import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurants = [];
  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getRestaurants().subscribe({
      next(response) { console.log(response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
     });
    console.log(this.restaurants);
  }



}
