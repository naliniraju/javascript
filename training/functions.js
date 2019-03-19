function getDetails(){
   
     var name = function getName(){
        return "Santhosh" + "Kumar";
    }
    var edu = function getEdu(){
        return "M.C.A";
    }
    var phone = function getContactNo(){
        return 98663212212;
    }

    console.log("My Name " + name()+ " Education : "+edu()+" Contact to me on :"+phone());



    var name = function(){
        return "Santhosh" + "Kumar";
    }
    console.log("My Name " + name());


    var email = new Function('name','domain','return name.concat(domain)');

    console.log(email('santhosh','gsk'));

}


