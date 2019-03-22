class DataAccessService{
    getConnection(){
        var database = openDatabase("learning","1.0,","test",1024);
        console.log("Database Connection >> "+database);
        return database;
    }

    createTable(Connection){
        Connection.transaction(function(query){
            query.executeSql('create table if not exists user(id unique,name,password,email)');
        });
    }
    insertData(connection){
        connection.transaction(function(query){
            query.executeSql("insert into user values (1000,'santhosh','password','gsk@gmail.com')");
        });
      }

    updateData(connection){
        connection.transaction(function(query){
            query.executeSql("update user set name='gskgskgsk' where id=1000");
        });
    }
    fetchData(connection){
        var results = [];
        connection.transaction(function(query){
            query.executeSql('select * from user',[],function(u,result){
                var array = result.rows;
                
                for(var i = 0; i<array.length ; i++){
                    var emp = new Employee();
                    emp.setId(array[i].id);
                    emp.setName(array[i].name);
                    emp.setPassword(array[i].password);
                    emp.setEmail(array[i].email);
                    results.push(emp);
                    console.log("Emp >> "+emp.getId());
                }

            });
        })
        return results;
    }

    fetchAjaxData(){
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        if(xhr){
            //var url = "https://jsonplaceholder.typicode.com/posts";
            var url = "https://www.google.com/gsk";
            xhr.open("GET",url,true);
            xhr.send();
            xhr.onreadystatechange = function(){
             if(xhr.status==404){
                    document.write(xhr.response);
                }

                if(xhr.readyState == 4 && xhr.status == 200){
                    console.log(xhr.response);
                    document.write(xhr.response);
                }
                else{
                    if(xhr.status==300){

                    }
                    
                }
            }
        }
}
}
