import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends DialogComponent<RegisterModal, boolean> {
  user = {
    username : '',
  };

  constructor(dialogService: DialogService) {
    super(dialogService);
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
    console.log(this.user.username);

  }
}
export interface RegisterModal {}
