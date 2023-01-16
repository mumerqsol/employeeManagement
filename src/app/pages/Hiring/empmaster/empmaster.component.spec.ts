import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpmasterComponent } from './empmaster.component';

describe('EmpmasterComponent', () => {
  let component: EmpmasterComponent;
  let fixture: ComponentFixture<EmpmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
