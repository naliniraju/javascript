import {Component} from "@angular/core";

@Component({
    selector:"my-student",
    templateUrl :'./student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent{

    name : string = "GC Technologies";

    isDisabled:boolean = false;


    myname : string = "GC Technologies!!"

            cspan : number = 2;
            empno : number = 1000;
            empname : string = "Santhosh Kumar Bachhu";
            email : string = "santhosh@saidaba.com";
            dob  = new Date("10-10-2010");
            salary : number = 100000;
            doj = new Date("02-10-2019");
            gender = "Male";
            hra : number = 50000;


            isHide : boolean = false;

            show():void {
                this.isHide = !this.isHide;
            }
            
}


