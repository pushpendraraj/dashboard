import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { RegisterComponent } from '../register/register.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../data.service';
import { LocalStorageService } from 'ngx-localstorage';
import { environment } from '../../environments/environment';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends DialogComponent<LoginModal, boolean> implements OnInit {
  user = {
    email: '',
    password: ''
  };
  error = '';

  constructor(
    dialogService: DialogService,
    private spinner: NgxSpinnerService,
    private dataService: DataService,
    private _storageService: LocalStorageService,
    public router: Router
  ) {
    super(dialogService);
   }


   ngOnInit() {

   }

  openModal(type) {
    const self = this;
    self.close();
    if (type === 'register') {
      self.dialogService.addDialog(RegisterComponent, {  }, { closeByClickingOutside: true });
    }
  }

  login() {
    this.spinner.show();
    const userData = this.user;
    this.dataService.loginUser(userData).subscribe(
      (loginData) => {
        if (loginData.login) {
          this._storageService.set('loggedUser', JSON.stringify(loginData.result), environment.storageKey);
          this._storageService.set('isLoggedIn', 'true', environment.storageKey);
          this.close();
          window.location.reload(true);
        } else {
          this.error = loginData.message;
          this.spinner.hide();
        }
      },
      (err) => {
        this.error = environment.serverError;
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
      }
    );
  }

}
export interface LoginModal {}
