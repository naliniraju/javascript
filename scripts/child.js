class Child extends Parent{

    constructor(){
        super();
        document.write("Child Construtor !!!<br>");

    }
    display(){
        super.display();
        var user = new User();
        user.setId(1001);
        user.setName("Santhosh Kumar ");
        user.setEmail("gsk@gmail.com");
        document.write("Child Display Method !!<br>"+this.getDay());
        document.write("<< ID >> "+user.getId()+" << Name >> "+user.getName()+" << Email >> "+user.getEmail());
    }

    
}