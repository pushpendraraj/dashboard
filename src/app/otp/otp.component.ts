import { Component, OnInit } from '@angular/core';
import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { DataService } from '../data.service';
import { isNumber } from 'util';

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
  constructor(dialogService: DialogService, public dataService: DataService) {
    super(dialogService);
  }

  ngOnInit() {
    const startDigit = this.data.otp.toString().slice(0, 2);
    const lastDigit = this.data.otp.toString().slice(-2);

    if (isNumber(this.data.otp)) {
      this.otpDelivery = true;
      this.cls = 'alert alert-success text-center';
      this.otpDeliveryMsg = `<strong>One Time Passcode has been to your register mobile i.e. ${startDigit}xxxxxx${lastDigit}.</strong><hr>
      <small>Please enter the OTP below to verify your mobile number. If you don not get OTP click on Resend OTP.</small>`;
    }
  }

  verifyOtp() {
    const userOtp = this.user.otp;
    const orgOtp = this.data.userInfo.contactNo;
    if (userOtp !== orgOtp) {
      this.otpDelivery = true;
      this.cls = 'alert alert-danger text-center';
      this.otpDeliveryMsg = `<strong>One Time Passcode that you have entered not matched</strong><hr>
      <small>Please enter the correct OTP below to verify your mobile number. If you don not get OTP click on Resend OTP.</small>`;
    } else {

    }
    // console.log(userOtp);
    console.log(orgOtp);
  }
}

export interface OtpModal {}
