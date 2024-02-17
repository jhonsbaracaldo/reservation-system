import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/Model/data.service';

@Component({
  selector: 'app-soon-movie',
  templateUrl: './soon-movie.component.html',
  styleUrls: ['./soon-movie.component.css']
})
export class SoonMovieComponent {
  constructor(private movieservice:DataService, private router:Router){}
 
  get movies(){
    return this.movieservice.movies;
   }
}
