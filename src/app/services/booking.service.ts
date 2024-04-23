import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './class/booking'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private url = "http://localhost:8080/v1/Booking/addBooking"
  private url2 = "http://localhost:8080/v1/Booking/searchBooking"
  private url3="http://localhost:8080/v1/Booking/allBooking"
  private url4="http://localhost:8080/v1/Booking/update"
  private url5="http://localhost:8080/v1/Booking/delete"

  constructor(private httpClient:HttpClient ){}

  registrarReservacion(booking:Booking): Observable<any>{
    return this.httpClient.post<Booking>(`${this.url}`,booking)
    }

    obtenerReservacionPorId(id: number): Observable<Booking> {
      return this.httpClient.get<Booking>(`${this.url2}/${id}`);
    }
  
    obtenerListaReservaicones() :Observable<Booking[]>{
      return this.httpClient.get<Booking[]>(`${this.url3}`)
    }

    actualizarReservacion(id: number, Booking:Booking): Observable<object> {
      return this.httpClient.put(`${this.url4}/${id}`,Booking);
    }

    eliminarReservation(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.url5}/${id}`);
    }
}
