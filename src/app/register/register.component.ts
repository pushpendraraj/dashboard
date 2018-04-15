import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { LoginComponent } from '../login/login.component';
import { OtpComponent } from '../otp/otp.component';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LocalStorageService } from 'ngx-localstorage';
import { environment } from '../../environments/environment';
import { DataService } from '../data.service';
import { NgxSpinnerService } from 'ngx-spinner';

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

  constructor(
    dialogService: DialogService,
    private _storageService: LocalStorageService,
    private dataService: DataService,
    private spinner: NgxSpinnerService
  ) {
    super(dialogService);
   }

  ngOnInit() { }

  openModal(type, data) {
    const self = this;
    self.close();
    if ( type === 'login') {
      self.dialogService.addDialog(LoginComponent, {  }, { closeByClickingOutside: true });
    } else if (type === 'otp') {
      self.dialogService.addDialog(OtpComponent, { data }, { closeByClickingOutside: true } );
    }
  }

  register() {
    this.spinner.show();
    const userData = this.user;
    this.dataService.verifyOtp().subscribe(
      (data) => {
        this.openModal('otp', {otp: data, mobile: this.user.contactNo});
        console.log(data);
        this.spinner.hide();
      },
      (err) => {
        console.log('error');
      },
      () => {

      }
    );
    // this._storageService.set('tempUser', userData, environment.storageKey);
    // alert('submitted');

    console.log(this.user);
  }
}
export interface RegisterModal {}
