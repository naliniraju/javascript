import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app.component.service'
import { User } from './login/user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EMARKETING ';
  data : any;
  isLoginPage : boolean = false;
  user = new User();
  constructor(private service : AppComponentService){

  }
  ngOnInit(){
     this.service.getUserData().subscribe( results => {
       this.data = results;
       this.user.setId(this.data.name);
       console.log(this.data.name);
       console.log(this.data.id);
       console.log(this.data.email);
     },error => {
       console.log(error);
     });
    
  }

  createUser(){
    this.service.createUser(this.user);
  }
}
