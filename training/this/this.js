"use strict"

function arraydemo(){
     
 function item(id,name,adrs){
    var di;

di=id;
this.name=name;
this.adrs=adrs;
this.code=function(){
    return name+","+di
     +","+adrs+"<br/>";
}
 }

var item2=new item(102,"Sandeep","san");
 var item3=new item(104,"Raju","raj");
 console.log(item2.code());
 console.log(item3.code());

document.write(item2.code());
document.write(item3.code());

//document.write(item2.name);
//ocument.write(Object.values(item3));
 
}