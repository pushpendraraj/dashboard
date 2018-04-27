import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { environment } from '../../environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedIn = false;
  loggedUserInfo = '';
  constructor(private _storageService: LocalStorageService, public router: Router, private spinner: NgxSpinnerService) { 
    this.spinner.show();
    if ((this._storageService.get('isLoggedIn', environment.storageKey))) {
      this.loggedIn = true;
      this.loggedUserInfo = JSON.parse(this._storageService.get('loggedUser', environment.storageKey));
      this.spinner.hide();
    }else{
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    
  }

}
