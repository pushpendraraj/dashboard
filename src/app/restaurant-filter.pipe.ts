import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'restaurantFilter'
})
export class RestaurantFilterPipe implements PipeTransform {
  transform(restaurants: any, searchQuery: any): any {
    if(searchQuery.searchTxt===undefined && searchQuery.cuisineId===undefined){
      return restaurants;
    }else if(searchQuery.searchTxt===undefined){
      let reastr = restaurants.filter(function(restaurant){
        if(restaurant.cuisine_id.indexOf(searchQuery.cuisineId)!=-1){
          return false;
        }else{
          return restaurant;
        }
      })
    }else if(searchQuery.cuisineId===undefined){
      return restaurants.filter(function(restaurant){
        if(restaurant.restaurant_name.toLowerCase().includes(searchQuery.searchTxt.toLowerCase()) || restaurant.cusineNames.toLowerCase().includes(searchQuery.searchTxt.toLowerCase())){
          return true;
        }
      })
    }else{
      return restaurants.filter(function(restaurant){
        if(restaurant.restaurant_name.toLowerCase().includes(searchQuery.searchTxt.toLowerCase())){
          if(restaurant.cuisine_id.indexOf(searchQuery.cuisineId)!=-1){
            return restaurant;
          }else{
            return false;
          }
        }else{
          return false;
        }
      })
    }
   
    // return restaurants.filter(function(restaurant){
    //   return restaurant.restaurant_name.toLowerCase().includes(restaurantName.toLowerCase());
    // })
  }
}
