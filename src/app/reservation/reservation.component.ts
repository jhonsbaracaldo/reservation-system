import { Component } from '@angular/core';
import { DataService } from 'src/services/data.service';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  constructor(private movieservice:DataService){}
 
  get movies(){
    return this.movieservice.movies;
   }

}