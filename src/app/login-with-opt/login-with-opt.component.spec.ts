import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithOptComponent } from './login-with-opt.component';

describe('LoginWithOptComponent', () => {
  let component: LoginWithOptComponent;
  let fixture: ComponentFixture<LoginWithOptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWithOptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
