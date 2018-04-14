import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'restaurantFilter'
})
export class RestaurantFilterPipe implements PipeTransform {
  transform(restaurants: any, searchQuery: any): any {
    if (searchQuery.searchTxt === undefined && searchQuery.cuisineId === undefined) {
      return restaurants;
    } else if (searchQuery.searchTxt === undefined) {
      const reastr = restaurants.filter(function(restaurant) {
        if (restaurant.cuisine_id.indexOf(searchQuery.cuisineId) !== -1) {
          return false;
        } else {
          return restaurant;
        }
      });
    } else if (searchQuery.cuisineId === undefined) {
      return restaurants.filter(function(restaurant) {
        const rNameTmp = restaurant.restaurant_name.toLowerCase();
        const cNamesTmp = restaurant.cusineNames.toLowerCase();
        if (rNameTmp.includes(searchQuery.searchTxt.toLowerCase()) || cNamesTmp.includes(searchQuery.searchTxt.toLowerCase())) {
          return true;
        }
      });
    } else {
      return restaurants.filter(function(restaurant) {
        if (restaurant.cusineNames === undefined) {
          restaurant.cusineNames = '';
        }
        const rNameTmp = restaurant.restaurant_name.toLowerCase();
        const cNamesTmp = restaurant.cusineNames.toLowerCase();
        const lTmp = restaurant.location.toLowerCase();
        const sText = searchQuery.searchTxt.toLowerCase();
        if  (rNameTmp.includes(sText) || cNamesTmp.includes(sText) || lTmp.includes(sText)) {
          if (restaurant.cuisine_id.indexOf(searchQuery.cuisineId) !== -1) {
            if (restaurant.min_order >= searchQuery.minOrderVal) {
              return restaurant;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
    }
  }
}
