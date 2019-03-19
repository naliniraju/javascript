//const idxdb = require("./indextdb"); 

function checkIndexDB(){
    if(window.indexedDB){
        alert("DB Avaliable");
        try{
            var request = window.indexedDB.open("leanring",3);
            alert(request);
            //idxdb.sayHello();
        }catch(error){
            console.log(error);
        }finally{
            idxdb.sayHello();
        }
    }else{
        alert("DB Not Avaliable");
    }
}


var name="Greater Coder";

var gradeA = 90;
var gradeB = 80;
var gradeC = 70;
var gradeD = 60;
var gradeE = 50;
var gradeF = 40;


function getDetails(marks){
    
    
    var grade;

    if(marks < 40){
        grade = 'F';
        return grade;
    }else if(marks < 50){
        grade = 'E';
        return grade;
    }else if(marks < 60){
        grade = 'D';
        return grade;
    }else if(marks < 70){
        grade = 'C';
        return grade;
    }else if(marks < 80){
        grade = 'B';
        return grade;
    }else {
        grade = 'A';
        return grade;
    }
}


function getGrade(){
    var marks = document.getElementById("marks").value;
    var grade = getDetails(marks);

    switch(grade){

            case 'F' : document.write("Try again!!");
            break;

            case 'E' : document.write("Just passed");
            break;

            case 'D' : document.write("need to improve");
            break;

            case 'C' : document.write("Nice work");
            break;

            case 'B' : document.write("Good Work");
            break;

            default :  document.write("Excellent work");
            break;
    }

}


