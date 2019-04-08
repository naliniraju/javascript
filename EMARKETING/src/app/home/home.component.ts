import { Component, OnInit } from '@angular/core';
import { AppComponentService } from '../app.component.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styles:['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'EMARKETING - HOME';
  data : any;

  constructor(private service : AppComponentService,private router: Router){

  }
  ngOnInit(){
     this.service.getUserData().subscribe( results => {
       this.data = results;
       console.log(this.data.name);
     },error => {
       console.log(error);
     });
    
  }
  load():void{
    this.router.navigate(['app-menu']);
  }
}
