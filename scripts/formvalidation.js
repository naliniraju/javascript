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