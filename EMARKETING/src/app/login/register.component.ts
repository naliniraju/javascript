import { Component } from "@angular/core";
import { User } from "./user";
import { AppComponentService } from '../app.component.service';

@Component({
    selector:'app-register',
    templateUrl:'./register.component.html'
})
export class RegisterComponent{
    user : User = new User();

constructor(private service : AppComponentService){    
}
createUser(){
    this.service.createUser(this.user);
  }
}