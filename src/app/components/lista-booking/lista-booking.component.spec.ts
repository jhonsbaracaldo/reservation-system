import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBookingComponent } from './lista-booking.component';

describe('ListaBookingComponent', () => {
  let component: ListaBookingComponent;
  let fixture: ComponentFixture<ListaBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
