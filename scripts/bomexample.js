function getAlert(){
    alert("Hello this alert");
}
function getConfirmation(){
    var flag = confirm("Hi Do you want to continue!!!!");
    if(flag){
        document.write("yes I'm moving ahead!!!");
    }else{
        document.write("Okay, thanks for you feedback");
    }  
}
function getPromt(){
    var value = prompt("Hi, Welcome to our JS and provide your name");
    document.write("Hello "+value+" Welcome to your training class!!!!");
} 

function getOpen(){
    open("http://www.google.co.in");
}

function getHistory(){
   // document.write(history.length);
    history.go(2);
    history.forward();
    history.back();

   
}
function getScreenDetails(){
    document.write("screen.availHeight() "+screen.availHeight);
    document.write("screen.availWidth() "+screen.availWidth);
    document.write("screen.pixelDepth() "+screen.pixelDepth);
    document.write("screen.colorDepth() "+screen.colorDepth);
}