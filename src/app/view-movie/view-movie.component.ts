import { Component } from '@angular/core';
import { DataService } from 'src/services/data.service';


@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent {
constructor(private movieservice:DataService){}
 
  get movies(){
    return this.movieservice.movies;
   }


}



