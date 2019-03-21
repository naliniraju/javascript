//"use strict"
function validate(){
    var x = 100;
    console.log(x);
}

var myarray = [];
var urarray = [];

function generateTableData(){
    var array = [["10001","Santhosh","gsk@gmail.com","HYDERABAD","9866312212","10-10-1990"],
                 ["10002","Santhosh_1","gsk_1@gmail.com","HYDERABAD","9866312212","10-10-1970"],
                 ["10002","Santhosh_1","gsk_1@gmail.com","HYDERABAD","9866312212","10-10-1970"]],
                 table = document.getElementById("table");

                for(var i=0 ; i<array.length; i++){
                    var row = table.insertRow(table.length);
                    for(var j=0; j<array[i].length;j++){
                        var cell = row.insertCell(j);
                        cell.innerHTML = array[i][j];
                    }
                }
            }

function addDatatoArray(){
    document.write("My Array Size and details <<Before>>"+myarray.length +" <<>>" +myarray+"<br>");
    myarray.push("Santhosh","Sample");
    myarray.push("Raju");
    myarray.push("Sandeep");
    document.write("My Array Size and details <<After>>"+myarray.length +" <<>>" +myarray+"<br>");

    myarray.pop();
    document.write("My Array Size and details <<After>>"+myarray.length +" <<>>" +myarray+"<br>");
    urarray.push("Aryan");
    urarray.push("Deepthi");
    urarray.push("Eshwar");
    var result = myarray.concat(urarray);
    document.write("Results Array Size and details "+result.length +" <<>>" +result+"<br>");

    document.write(result.indexOf("Deepthi")+"<br>");

    result.forEach(function(value){
        if(value=="Deepthi"){
            document.write("Loop Values >> "+value+"<br>");
        }
    });
    var subArray = result.slice(3,5);
    document.write("Results Array Size and details "+subArray.length +" <<>>" +subArray+"<br>");
}

function buildObject(){

        var myObject = {};
        myObject.id = "1001";
        myObject.name="Santhosh";
        myObject.email = "gsk@gmail.com";
        document.write("Results myObject details ID : "+myObject.id +"<br>" +myObject.name +"<br>"+myObject.email);
        document.write("Results Object value "+Object.values(myObject));
        console.log(myObject);
        

}


class Employee{
    constructor(id,name){
        this.id = id;
        this.name=name;
    }
    getDetails(){
        var arr = [];
        arr[0]=this.id;
        arr[1]=this.name;
        return arr;
    }

    static fetchDetails(){
        document.write("This is static Block !!");   
    }

    setName(name){
        this.name = name;
    }
    getName(){
        return name;
    }
}

function getEmployeeDetails(){
    var emp = new Employee(1001,"Santhosh");
    var array = emp.getDetails();
    array.forEach(function(value){
        document.write("Employee :: "+value);
    })
    Employee.fetchDetails();
}


