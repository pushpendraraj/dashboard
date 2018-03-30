import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'restaurantFilter'
})
export class RestaurantFilterPipe implements PipeTransform {
  transform(restaurants: any, searchQuery: any): any {
    
    if(searchQuery.searchTxt===undefined && searchQuery.cusineId===undefined){
      return restaurants;
    }else if(searchQuery.searchTxt===undefined){
      
      return restaurants.filter(function(restaurant){
        // if(restaurant.cuisine_id)
        console.log(restaurant.cuisine_id)
        //return restaurant.restaurant_name.toLowerCase().includes(searchQuery.searchTxt.toLowerCase());
      })
    }else if(searchQuery.cusineId===undefined){
      return restaurants.filter(function(restaurant){
        return restaurant.restaurant_name.toLowerCase().includes(searchQuery.searchTxt.toLowerCase());
      })
    }else{

    }
   
    // return restaurants.filter(function(restaurant){
    //   return restaurant.restaurant_name.toLowerCase().includes(restaurantName.toLowerCase());
    // })
  }
}
