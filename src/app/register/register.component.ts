import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { LoginComponent } from '../login/login.component';
import { FormGroup, Validators, FormControl } from '@angular/forms';

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

  constructor(dialogService: DialogService) {
    super(dialogService);
   }

  ngOnInit() {
    // this.registerForm = new FormGroup({
    //   'fullName': new FormControl(this.user.fullName, Validators.required)
    // });
  }

  openModal(type) {
    const self = this;
    self.close();
    if ( type === 'login') {
      self.dialogService.addDialog(LoginComponent, {  }, { closeByClickingOutside: true });
    }
  }
  register() {
    alert('submitted');
    console.log(this.user.fullName);

  }
}
export interface RegisterModal {}
