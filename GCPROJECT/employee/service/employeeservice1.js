class DataAccessService{
    getConnection(){
        var database = openDatabase('websqldbs11', '2.0', 'websqldbs1', 1024);
        console.log("Database Connection >> "+database);
        return database;
    }

    createTable(connection){
        connection.transaction(function(query){
            query.executeSql('create table employees(id integer primary key,name text,password text,email text)');
        });
    }
    insertData(connection){
        connection.transaction(function (query) {
            var id = document.getElementById("id").value;
            var name = document.getElementById("name").value;
            var password = document.getElementById("password").value;
            var email = document.getElementById("email").value;
            query.executeSql('insert into employees (id,name,password,email) values (?,?,?,?)', [id, name, password, email]);
        });
        fetchData();
      }

    
      fetchData(connection){
        var results = [];
        connection.transaction(function (query) {
            query.executeSql('select * from employees', [], function (u, results) {
                var array = results.rows;
                var tbl = '<table cellpadding="2" cellsapacing="2" border="1">';
                tbl += '<tr><th>Id</th><th>Name</th><th>Password</th><th>Email</th><th>CRUD</th></tr>';
                for (var i = 0; i < array.length; i++) {
                    var employee = results.rows.item(i);
                    tbl += '<tr>';
                    tbl += '<td>' + employee.id + '</td>';
                    tbl += '<td>' + employee.name + '</td>';
                    tbl += '<td>' + employee.password + '</td>';
                    tbl += '<td>' + employee.email + '</td>';
                    tbl += '<td><a href="#" onclick="editData(' + employee.id + ')"> Edit</a>|<a href="#" onclick="deleteData(' + employee.id + ')"> Delete</a></td>'
                    console.log("Emp >> " + employee.id);
                    tbl += '</tr>';

                }
                tbl += '</table>';
                document.getElementById('result').innerHTML = tbl;
            });

        })
        }
        
           deleteData(connection) {

        connection.transaction(function (query) {
            var results = confirm('Are you sure?')
            if (results === true)
                query.executeSql('delete from employees where id = ?', [id], fetchData());
        });
    }
    
    editData(connection,id) {
        connection.transaction(function (query) {
    
            query.executeSql('select * from employees where id = ?', [id], function (query, results) {
    
                // query.executeSql("select * from employees where id=?",[id]);
                var employee = results.rows.item(0);
                document.getElementById("id").value = employee.id;
                document.getElementById("name").value = employee.name;
                document.getElementById("password").value = employee.password;
                document.getElementById("email").value = employee.email;
                console.log(employee);
                // query.executeSql("UPDATE user SET name=?, password=?, email=? WHERE id=?', [name,password,email,id]");
            });
        });
    }
    
    saveData(connection) {
        connection.transaction(function (query) {
    
                var id = document.getElementById("id").value;
                var name = document.getElementById("name").value;
                var password = document.getElementById("password").value;
                var email = document.getElementById("email").value;
                query.executeSql('UPDATE employees SET name=?, password=?, email=? WHERE id = ?', [name,password,email,id],fetchData());
            });
        
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
