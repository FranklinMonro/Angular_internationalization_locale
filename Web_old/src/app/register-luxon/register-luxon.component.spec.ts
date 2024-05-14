import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLuxonComponent } from './register-luxon.component';

describe('RegisterLuxonComponent', () => {
  let component: RegisterLuxonComponent;
  let fixture: ComponentFixture<RegisterLuxonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterLuxonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterLuxonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
