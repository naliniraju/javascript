import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'studentpipe'
})
export class StudentCustomPipe implements PipeTransform{
    transform(value : string , gender : string){
        if(gender == "Male"){
            return "Mr . "+value;
        }
        else{
            return "Miss . "+value;
        }
    }
}