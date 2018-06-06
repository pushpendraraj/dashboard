import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  loggedIn = false;
  loggedUserInfo = {};
  constructor(private _storageService: LocalStorageService) {
    if ((this._storageService.get('isLoggedIn', environment.storageKey))) {
      this.loggedIn = true;
      this.loggedUserInfo = JSON.parse(this._storageService.get('loggedUser', environment.storageKey));
    }
  }

  ngOnInit() {
  }

}
