import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../clases/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private url = "http://localhost:8080/v1/Booking/addBooking";
  private url2 = "http://localhost:8080/v1/Booking/searchBooking"
  private url3="http://localhost:8080/v1/Booking/allBookingg"

  constructor(private httpClient:HttpClient ){}

  registrarReservacion(booking:Booking): Observable<Booking>{
    return this.httpClient.post<Booking>(`${this.url}`,booking)
    }

    obtenerReservacionPorId(id: number): Observable<Booking> {
      return this.httpClient.get<Booking>(`${this.url2}/${id}`);
    }
  
    obtenerListaReservaicones() :Observable<Booking[]>{
      return this.httpClient.get<Booking[]>(`${this.url3}`)
    }
}
