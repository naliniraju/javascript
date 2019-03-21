function validate(){
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    //alert(username+password);

    //Keep array here and iterate the array and check the if condition to cross validated enter values.


    if((username!= "") && (password!= "")){
        return true;
    }else{
        return true;
    }
}


var array = [];
function addElement(){
    var value = document.getElementById("name").value;
    if(array.length < 5){
        array.push(value);
    }else{
        array.shift();
        array.push(value);
    }
    console.log(array);
}


function createEmployee(){

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    console.log("First Name :: "+fname);
    console.log("Last Name :: "+lname);
    console.log("email :: "+email);
    console.log("address :: "+address);

    var flag = checkValidation(fname,lname,email,address);

    if(flag){
        var emp = new Employee(fname,lname,email,address);
        var object =  emp.getDetails();
            console.log("Emp ID > "+object.fname+"<br>");
            console.log("Emp Name > "+object.lname+"<br>");
            console.log("Emp Email > "+object.email+"<br>");
            console.log("Emp Addres > "+object.address+"<br>");
    }else{
        document.write("Failed at validations, Please check you values once again!!");
    }
    
}

function checkValidation(fname,lname,email,address){
        if(fname==""){
            return false;
        }if(lname==""){
            return false;
        }
        if(email==""){
            return false;
        }
        if(address==""){
            return false;
        }
        else{
            return true;
        }
    }

class Employee{

    constructor(fname,lname,email,address){
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.address = address;
       }

       getDetails(){
        var object ={};
           object.fname = this.fname;
           object.lname= this.lname;
           object.email = this.email;
           object.address = this.address;
           return object;
       }
}