class Student{

constructor(){}
    static display(){
        document.write("static Block !!!");
    }
    display(){
        document.write("Non Static Block!!!");
    }
    getDetails(){

    }
}

function getStudentdetails(){
    Student.display();
}