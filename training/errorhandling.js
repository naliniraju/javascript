function validate(){
        var num = 1;
      
        try{
            document.write("Before try block </br>");
            //num.toPrecision(500);
            document.write("After try block </br>");
        }catch(error){
            document.write("Catch Block!!! </br>");
            document.write("Errored !! "+error+"</br>");
        }finally{
            document.write("Finally Block")  
        }
}