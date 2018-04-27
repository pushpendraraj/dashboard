import { Component, OnInit } from '@angular/core';
import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { DataService } from '../data.service';
import { LocalStorageService } from 'ngx-localstorage';
import { environment } from '../../environments/environment';
import { RouterLink, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent extends DialogComponent<OtpModal, boolean> implements OnInit {
  user = {
    otp: '',
  };
  data = {
   otp: '',
   userInfo: {contactNo: ''}
  };
  otpDelivery = false;
  otpDeliveryMsg = '';
  cls = '';
  error = '';
  orgOtp: number;
  constructor(
    dialogService: DialogService,
    public dataService: DataService,
    private _storageService: LocalStorageService,
    public router: Router,
    private spinner: NgxSpinnerService
  ) {
    super(dialogService);
  }

  ngOnInit() {
    this.checkOtp();
  }

  checkOtp() {
    const startDigit = this.data.userInfo.contactNo.toString().slice(0, 2);
    const lastDigit = this.data.userInfo.contactNo.toString().slice(-2);

    if (this.data.otp !== '') {
      this.otpDelivery = true;
      this.cls = 'alert alert-success text-center';
      this.otpDeliveryMsg = `<strong>One Time Passcode has been to your register mobile i.e. ${startDigit}xxxxxx${lastDigit}.</strong><hr>
      <small>Please enter the OTP below to verify your mobile number. If you don not get OTP click on Resend OTP.</small>`;
    }
  }

  verifyOtp() {
    this.spinner.show();
    const userOtp = this.user.otp;
    const orgOtp = this.data.otp;

    if (userOtp !== orgOtp) {
      this.otpDelivery = true;
      this.cls = 'alert alert-danger text-center';
      this.otpDeliveryMsg = `<strong>One Time Passcode that you have entered not matched</strong><hr>
      <small>Please enter the correct OTP below to verify your mobile number. If you don not get OTP click on Resend OTP.</small>`;
      this.spinner.hide();
    } else {
      this.dataService.registerUser(this.data.userInfo).subscribe(
        (data) => {
          if (data.result.insertId > 0) {
            this.dataService.loginUser(this.data.userInfo).subscribe(
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

  resendOtp() {
    this.spinner.show();
    this.dataService.sendOtp().subscribe(
      (data) => {
        this.orgOtp = data;
        this.checkOtp();
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

export interface OtpModal {}
