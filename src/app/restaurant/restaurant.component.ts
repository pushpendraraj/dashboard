import { Component, OnInit, AfterViewInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Http } from '@angular/http';
import { concat } from 'rxjs/operators';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit, OnDestroy, AfterViewInit,AfterViewChecked, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  restaurants = [];
  pageTitle = 'Restaurants';
  breadcrumb = `<a class="breadcrumb-item" href="#">Home</a>
  <span class="breadcrumb-item active">Restaurants</span>`;
  cuisines = [];
  restaurantName = '';
  cuisineName = '';
  constructor(
    private dataService : DataService, 
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnChanges(){
    //console.log(this.cusineName);
    // console.log('on ngOnChanges');
  }

  ngOnInit() {
    this.getCuisines();
    this.getRestaurants();
    // console.log('ng init')
  }

  getRestaurants(){
    let  a = this.getCuisineByIds('11,12');
    console.log('dddd'+a)
    this.spinnerService.show();
    this.dataService.getRestaurants().subscribe(
      (data)=>{
        let tempArr = [];
        data.forEach(restaurant => {
          // console.log(restaurant)
          restaurant.cusineNames = 'Test';
          tempArr.push(restaurant);
        });
        this.restaurants = tempArr;
      },
      (err) =>{
        this.spinnerService.hide();
      },
      ()=>{
       this.spinnerService.hide();
      }
    );
  }

  getCuisineByIds(Ids){
    let tempArr = [];
    this.dataService.geCuisinesByIds(Ids).subscribe((data)=>{ 
      console.log(typeof(data))
      console.log(data)
      // for(let i = 0; i<data.length; i++){
      //   tempArr.push(data[i].cuisine_name);
      // }
      // this.resCuisineName = tempArr.join(', ');  
    },
    (err) =>{
      // this.spinnerService.hide();
    });
  }

  getCuisines(){
    this.spinnerService.show();
    this.dataService.getCuisines()
    .subscribe(
      (data)=>{
        this.cuisines = data;
      },
      (err)=>{ 
        // console.log(err);
        this.spinnerService.hide();
      },
      ()=>{
        this.spinnerService.hide();
      })
  }

  ngDoCheck(){
    console.log('on ngDoCheck');  
  }
  ngAfterContentInit(){
    console.log('on ngAfterContentInit');
  }
  ngAfterContentChecked(){
    console.log('on ngAfterContentChecked');
  }
  ngAfterViewInit(){
    console.log('view ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('on ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('on ngOnDestroy');
  }
  
}
