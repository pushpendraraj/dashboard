import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { LoginComponent } from '../login/login.component';
import { OtpComponent } from '../otp/otp.component';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LocalStorageService } from 'ngx-localstorage';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends DialogComponent<RegisterModal, boolean> implements OnInit {
  user = {
    fullName : '',
    contactNo : '',
    email : '',
    password : '',
    name : ''
  };

  constructor(dialogService: DialogService, private _storageService: LocalStorageService) {
    super(dialogService);
   }

  ngOnInit() { }

  openModal(type) {
    const self = this;
    self.close();
    if ( type === 'login') {
      self.dialogService.addDialog(LoginComponent, {  }, { closeByClickingOutside: true });
    } else if (type === 'otp') {
      self.dialogService.addDialog(OtpComponent, {  }, { closeByClickingOutside: true } );
    }
  }

  register() {
    const userData = this.user;
    this.openModal('otp');
    // this._storageService.set('tempUser', userData, environment.storageKey);
    // alert('submitted');

    console.log(this.user);
  }
}
export interface RegisterModal {}
