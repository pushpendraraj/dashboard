import { Component, OnInit } from '@angular/core';
import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';
import { FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent extends DialogComponent<OtpModal, boolean> implements OnInit {
  user = {
    otp: ''
  };

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit() {
  }

  verifyOtp() {

  }
}

export interface OtpModal {}
