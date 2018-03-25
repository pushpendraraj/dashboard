import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operator/map';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  APIURL = environment.apiUrl;
  constructor( private http : Http) { }

  getRestaurants(): Observable<any>{
    return this.http.get(this.APIURL+'list-restaurants')
      .map((res:Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error')) 
  }

}
