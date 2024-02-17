import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarBookingComponent } from './actualizar-booking.component';

describe('ActualizarBookingComponent', () => {
  let component: ActualizarBookingComponent;
  let fixture: ComponentFixture<ActualizarBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
