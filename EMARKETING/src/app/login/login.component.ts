import { Component, OnInit } from '@angular/core';
import { AppComponentService } from '../app.component.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styles:['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'EMARKETING - LOGIN';
  data : any;

  constructor(private service : AppComponentService,private router: Router){
   
  }

  username : string ="";
  email : string ="";
  password : string ="";

  validate():void{
    this.router.navigate(['app-home']);
    }
   
  ngOnInit(){
     this.service.getUserData().subscribe( results => {
       this.data = results;
       console.log(this.data.name);
     },error => {
       console.log(error);
     });
    
  }
}