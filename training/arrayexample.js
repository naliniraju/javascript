function validateArray(){
    var myarray = ["Raju","Sandeep","Santhosh","Aryan"];
    var myArray = new Array(["Nitesh","Aditya","Eshwar","Shiva"]);
    document.write(myarray[0]+"<br>");
    document.write(myarray[3]+"<br>");
    document.write(myarray[7]+"<br>");
    for(var i=0; i<myarray.length; i++){
        document.write(myarray[i]+"<br>");
    }

}

function validateObject(){

    var obj1 = {"name":"Raju","email":"raju@raju.com","phone":"123456789"};
    var obj2 = {"name":"Sandeep","email":"Sandeep@raju.com","phone":"9876543321"};
    var obj3 = {"name":"santhosh","email":"santhosh@raju.com","phone":"00000000000"};
    var obj4 = {"name":"Nitesh","email":"Nitesh@raju.com","phone":"11111111111111111111"};
    document.write("Name of CEO :: "+obj1.name+"<br>");
    document.write("Name of CEO :: "+obj1.email+"<br>");
    document.write("Name of CEO  ::"+obj1['phone']+"<br>");


    var myarr = [];
    myarr.push(obj1);
    myarr.push(obj2);
    myarr.push(obj3);

    myarr.push(obj4);
    document.write("Length of the List >> "+myarr.length+"<br>");

    for(var i=0; i<myarr.length;i++){
        var value = myarr[i];
        document.write("Name of CEO :: "+value.name+"<br>");
        document.write("Name of CEO :: "+value.email+"<br>");
        document.write("Name of CEO  ::"+value.phone+"<br>");
    }
}

function passText(value){
    document.write(value);
}