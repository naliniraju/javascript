function validate(){
  
    var email = "santhosh@gsk.com";
    

    document.write("length of My string ::: "+email.length+"</br>");
    document.write("String email.concat(email)  :: "+email.concat(email)+"</br>");
    document.write("String email.sub()  :: "+email.sub()+"</br>");
    document.write("String email.substr(1,5)  :: "+email.substr(1,5)+"</br>");
    document.write("String email.charAt(3)  :: "+email.charAt(3)+"</br>");
    document.write("String email.indexOf('@')  :: "+email.indexOf('@')+"</br>");
    document.write("String email.replace('@','#')  :: "+email.replace("@","#")+"</br>");
    document.write("String email.search('@')  :: "+email.search('@')+"</br>");
   
}