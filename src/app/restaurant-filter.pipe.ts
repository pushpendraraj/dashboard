import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'restaurantFilter'
})
export class RestaurantFilterPipe implements PipeTransform {
  transform(restaurants: any, name: any): any {
    if(name===undefined) return restaurants;
    return restaurants.filter(function(restaurant){
      return restaurant.restaurant_name.toLowerCase().includes(name.toLowerCase());
    })
  }
}
