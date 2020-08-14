import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpForgotpasswordComponent } from './emp-forgotpassword.component';

describe('EmpForgotpasswordComponent', () => {
  let component: EmpForgotpasswordComponent;
  let fixture: ComponentFixture<EmpForgotpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpForgotpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
