import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { environment } from '../../environments/environment';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchFrm = {
    searchTxt: ''
  };

  constructor(private _storageService: LocalStorageService, private router: Router) { }

  ngOnInit() {

  }

  search() {
    this._storageService.set('searchValue', this.searchFrm.searchTxt, environment.storageKey);
    this.router.navigate(['restaurant']);
  }
}
