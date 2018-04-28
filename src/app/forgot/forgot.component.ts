import { Component, OnInit  } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { DataService } from '../data.service';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent extends DialogComponent<ForgotModal, boolean> implements OnInit {
  user = {
      email : ''
  };
  isError = false;
  isSuccess = false;
  message = '';
  constructor(dialogService: DialogService, public dataServie: DataService) {
    super(dialogService);
  }
  ngOnInit() {
  }

  forgot() {
    const userData = {
      email : this.user.email
    };

    this.dataServie.forgotPassword(userData).subscribe(
      (data) => {
        if (data.isSuccess) {

        } else {
          this.isError = true;
          this.message = '<strong>Sorry ! </strong> please enter a valid email';
        }
      },
      (err) => {

      }
    );
  }

  openModal(type) {
    if (type === 'login') {
      this.dialogService.addDialog(LoginComponent, {  }, { closeByClickingOutside: true });
    }
  }
}
export interface ForgotModal {}
