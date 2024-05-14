import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInterComponent } from './register-inter.component';

describe('RegisterInterComponent', () => {
  let component: RegisterInterComponent;
  let fixture: ComponentFixture<RegisterInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterInterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
