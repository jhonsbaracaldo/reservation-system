import { Component, OnInit } from '@angular/core';
import{MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  loginData ={
    "username":'',
    "password":''
  }

  
  ngOnInit(): void {
    
  }

 
}
