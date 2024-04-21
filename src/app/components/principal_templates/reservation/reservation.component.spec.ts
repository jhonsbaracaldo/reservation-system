import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Booking } from 'src/app/clases/booking';
import { BookingService } from 'src/app/services/booking.service';
import { ReservationComponent } from './reservation.component';
import swal from 'sweetalert2';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;
  let bookingServiceSpy: jasmine.SpyObj<BookingService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const bookingServiceSpyObj = jasmine.createSpyObj('BookingService', ['registrarReservacion']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ ReservationComponent ],
      providers: [
        { provide: BookingService, useValue: bookingServiceSpyObj },
        { provide: Router, useValue: routerSpyObj }
      ]
    })
    .compileComponents();

    bookingServiceSpy = TestBed.inject(BookingService) as jasmine.SpyObj<BookingService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call guardarReservacion method', () => {
    const bookingToSend: Booking = {
      id: 1,
      name: 'Test Movie',
      hora_funcion: String(),
      sala: 'Sala 1',
      asientos: 2
    };
    component.booking = bookingToSend;
    component.guardarReservacion();
    expect(bookingServiceSpy.registrarReservacion).toHaveBeenCalledWith(bookingToSend);
  });

  it('should call mostrarMensaje method', () => {
    const bookingToSend: Booking = {
      id: 1,
      name: 'Test Movie',
      hora_funcion: String(),
      sala: 'Sala 1',
      asientos: 2
    };
    const swalSpy = spyOn(swal, 'fire').and.returnValue(Promise.resolve({ isConfirmed: true, isDenied: false, isDismissed: false }));
    component.mostrarMensaje(bookingToSend);
    expect(swalSpy).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/actualizar-reserva'], { queryParams: { id: bookingToSend.id } });
  });

  it('should call onSubmit method', () => {
    const guardarReservacionSpy = spyOn(component, 'guardarReservacion');
    component.onSubmit();
    expect(guardarReservacionSpy).toHaveBeenCalled();
    //añadiendo pruebas con karma 
  });
});
