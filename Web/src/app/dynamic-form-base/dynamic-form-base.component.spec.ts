import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormBaseComponent } from './dynamic-form-base.component';

describe('DynamicFormBaseComponent', () => {
  let component: DynamicFormBaseComponent;
  let fixture: ComponentFixture<DynamicFormBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicFormBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
