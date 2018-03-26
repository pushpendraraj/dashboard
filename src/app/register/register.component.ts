import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends DialogComponent<RegisterModal, boolean> {
  constructor(dialogService : DialogService) {
    super(dialogService);
   }
  ngOnInit() {
  }

  openModal(type) {
    let self = this;
    self.close();
    if(type == 'register') {
      self.dialogService.addDialog(RegisterComponent, {  }, { closeByClickingOutside:true }); 
    }else if(type='login'){
      self.dialogService.addDialog(LoginComponent, {  }, { closeByClickingOutside:true }); 
    }
  }
}
export interface RegisterModal {}