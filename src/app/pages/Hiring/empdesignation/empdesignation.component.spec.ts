import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdesignationComponent } from './empdesignation.component';

describe('EmpdesignationComponent', () => {
  let component: EmpdesignationComponent;
  let fixture: ComponentFixture<EmpdesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdesignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpdesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
