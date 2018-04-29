import { Component, OnInit  } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { DataService } from '../data.service';
import { LoginComponent } from '../login/login.component';
import { NgxSpinnerService } from 'ngx-spinner';
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
  constructor(dialogService: DialogService, public dataServie: DataService, private spinner: NgxSpinnerService) {
    super(dialogService);
  }
  ngOnInit() {
  }

  forgot() {
    const userData = {
      email : this.user.email
    };

    this.spinner.show();
    this.dataServie.forgotPassword(userData).subscribe(
      (data) => {
        if (data.isSuccess) {
          this.isSuccess = true;
          this.message = `<strong>Thank you ! </strong> ${data.msg}`;
        } else {
          this.isError = true;
          this.message = `<strong>Sorry ! </strong> ${data.msg}`;
        }
        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
      }
    );
  }

  openModal(type) {
    const self = this;
    self.close();
    if (type === 'login') {
      this.dialogService.addDialog(LoginComponent, {  }, { closeByClickingOutside: true });
    }
  }
}
export interface ForgotModal {}
