import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/Model/data.service';



@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent  {
constructor(private movieservice:DataService, private router:Router, ){}
  get movies(){
    return this.movieservice.movies;

   }


   scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }


}






