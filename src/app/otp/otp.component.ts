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
   mobile: ''
  };
  otpDelivery = false;
  constructor(dialogService: DialogService, public dataService: DataService) {
    super(dialogService);
  }

  ngOnInit() {
    console.log(this.data);
    if (isNumber(this.data.otp)) {
      this.otpDelivery = true;
    }
    // console.log('OTP is ' + orgOtp);
  }

  verifyOtp() {
    const userOtp = this.user.otp;
    const orgOtp = this.data;
    // console.log(userOtp);
    console.log(orgOtp);
  }
}

export interface OtpModal {}
