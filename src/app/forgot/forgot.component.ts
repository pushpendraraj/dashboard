import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent extends DialogComponent<ForgotModal, boolean> implements OnInit {
  constructor(dialogService: DialogService) { 
    super(dialogService);
  }
  ngOnInit() {
  }
}
export interface ForgotModal {}