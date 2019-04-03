import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'customcomponent'
})
export class StudentCustomComponent{
    constructor(Element:ElementRef){
            Element.nativeElement.innerText ="Hello World ! This Chitti, Memory 1PT, Speed 1ZB";
    }
}