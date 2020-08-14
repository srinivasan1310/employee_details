import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFooterComponent } from './emp-footer.component';

describe('EmpFooterComponent', () => {
  let component: EmpFooterComponent;
  let fixture: ComponentFixture<EmpFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
