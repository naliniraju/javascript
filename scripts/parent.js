class Parent extends Date{
    constructor(){
        super();
        document.write("parent constructor<br>");
    }
    display(){
        document.write("Parent Display block<br>"+this.getDate());
    }
}