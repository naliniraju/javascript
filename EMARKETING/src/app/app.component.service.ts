import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./login/user";


@Injectable({
    providedIn:'root'
})
export class AppComponentService{

    endpoint : string ="http://localhost:8081/";

    constructor(private http:HttpClient){

    }

    getUserData() : Observable<any>{
        //return this.http.get(this.endpoint+"/userslist");
        return this.http.get("../assets/data/users.json");
    }

    createUser(user:User):void{
        this.http.post(this.endpoint+"/create",user);
    }

}