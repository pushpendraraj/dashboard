import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'restaurantFilter'
})
export class RestaurantFilterPipe implements PipeTransform {
  transform(restaurants: any, restaurantName: any, cusineName:any): any {
    console.log(cusineName);
    if(restaurantName===undefined) return restaurants;
    return restaurants.filter(function(restaurant){
      return restaurant.restaurant_name.toLowerCase().includes(restaurantName.toLowerCase());
    })
  }
}
