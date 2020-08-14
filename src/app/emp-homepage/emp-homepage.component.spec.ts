import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpHomepageComponent } from './emp-homepage.component';

describe('EmpHomepageComponent', () => {
  let component: EmpHomepageComponent;
  let fixture: ComponentFixture<EmpHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
