import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sectionClass:string;
  displayFooter:boolean = false;
  sectionId:string;

  constructor(private titleService:Title, private router:Router, private dialogService: DialogService){
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        if(router.url=='/'){
          this.sectionClass = '';
          this.displayFooter = false;
          this.sectionId = 'intro';
        }else{
          this.sectionClass = 'inner-page';
          this.displayFooter = true;
          this.sectionId = 'inner_bg';
        }
        var title = this.getTitle(router.routerState, router.routerState.root).join('-');
        titleService.setTitle(title);
      }
    });
  }

  getTitle(state, parent) {
    var data = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.title && (parent.snapshot.data.title!='undefined')) {
      data.push(parent.snapshot.data.title);
    }
    if(state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  openModal(type) {
    if(type == 'login') {
      this.dialogService.addDialog(LoginComponent, {  }, { closeByClickingOutside:true }); 
    }else if(type == 'register'){
      this.dialogService.addDialog(RegisterComponent, {  }, { closeByClickingOutside:true }); 
    } 
 }
}
