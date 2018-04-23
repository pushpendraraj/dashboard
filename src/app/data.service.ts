import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  APIURL = environment.apiUrl;
  constructor( private http: Http) { }

  sendOtp(): Observable<number> {
    return this.http.get(this.APIURL + 'otp')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  getRestaurants(): Observable<any> {
    return this.http.get(this.APIURL + 'list-restaurants/')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  getBlogs(): Observable<any> {
    return this.http.get(this.APIURL + 'list-blogs')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  getCuisines(): Observable<any> {
    return this.http.get(this.APIURL + 'list-cuisines')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  geCuisinesByIds(Ids: string): Observable<any> {
    return this.http.get(this.APIURL + 'get-cuisines-by-id/' + Ids)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  registerUser(userData): Observable<any> {
    return this.http.post(`${this.APIURL}register-user/`, userData)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json.error || 'server error'));
  }

  loginUser(userData): Observable<any> {
    return this.http.post(`${this.APIURL}login-user/`, userData)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json.error || 'server error'));
  }
}
