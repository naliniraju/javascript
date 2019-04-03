import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'calculate'
})
export class StudentCalculatePipe implements PipeTransform{
    transform(value : number , hra : number){
        return Math.sqrt(value+hra);
    }
}