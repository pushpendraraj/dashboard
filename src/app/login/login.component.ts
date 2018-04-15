import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends DialogComponent<LoginModal, boolean> implements OnInit {
  constructor(dialogService: DialogService) {
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

}
export interface LoginModal {}
