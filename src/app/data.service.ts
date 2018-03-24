import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  restaurants = [{
    id:1,
    name:'Test Restaurants',
  }];

  respr = [1, 2, 3, 4, 5];
  constructor() { }

  getRestaurants():Observable<any>{
    return of(this.restaurants);
  }

}
