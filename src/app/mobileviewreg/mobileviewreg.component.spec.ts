import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileviewregComponent } from './mobileviewreg.component';

describe('MobileviewregComponent', () => {
  let component: MobileviewregComponent;
  let fixture: ComponentFixture<MobileviewregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileviewregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileviewregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
