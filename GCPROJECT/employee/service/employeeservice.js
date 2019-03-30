
var database = openDatabase('websqldbs1', '1.0', 'websqldbs1', 1024);

function getData() {
    database.transaction(function (query) {
        query.executeSql('create table if not exists employees(id integer primary key,name text,password text,email text)');

        fetchData();
    });
}

function fetchData() {
    var results = [];
    database.transaction(function (query) {
        query.executeSql('select * from employees', [], function (u, results) {
            var array = results.rows;
            var tbl = '<table cellpadding="2" cellsapacing="2" border="1" style="background-color:white;width:100%;">';
            tbl += '<tr><th>Id</th><th>Name</th><th>Password</th><th>Email</th><th>Operations</th></tr>';
            for (var i = 0; i < array.length; i++) {
                var employee = results.rows.item(i);
                tbl += '<tr>';
                tbl += '<td>' + employee.id + '</td>';
                tbl += '<td>' + employee.name + '</td>';
                tbl += '<td>' + employee.password + '</td>';
                tbl += '<td>' + employee.email + '</td>';
                tbl += '<td><a href="#" onclick="editData(' + employee.id + ')"> Edit</a>|<a href="#" onclick="deleteData(' + employee.id + ')"> Delete</a></td>'
                //console.log("Emp >> " + employee.id);
                tbl += '</tr>';

            }
            tbl += '</table>';
            document.getElementById('result').innerHTML = tbl;
        });

    })
}

function insertData() {

    database.transaction(function (query) {
        var id = document.getElementById("id").value;
        var name = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        var email = document.getElementById("email").value;
        query.executeSql('insert into employees (id,name,password,email) values (?,?,?,?)', [id, name, password, email]);
    });
    fetchData();
    reset();
}

function deleteData(id) {

    database.transaction(function (query) {
        var results = confirm('Are you sure?')
        if (results === true)
            query.executeSql('delete from employees where id = ?', [id], fetchData());
    });
}

function editData(id) {
    database.transaction(function (query) {

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

function saveData() {
    database.transaction(function (query) {

        var id = document.getElementById("id").value;
        var name = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        var email = document.getElementById("email").value;
        query.executeSql('UPDATE employees SET name=?, password=?, email=? WHERE id = ?', [name, password, email, id], fetchData());
    });

}
function fetchAjaxData() {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    var obj, myObj, x, txt = "";
    dbParam = JSON.stringify(obj);
    if (xhr) {

        var url = "https://jsonplaceholder.typicode.com/posts";
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.status == 404) {
                document.write(xhr.response);
            }

            if (xhr.readyState == 4 && xhr.status == 200) {
                // console.log(xhr.response);
                myObj = JSON.parse(this.responseText);
                txt += "<table border='1' style='background-color:white;width:100%;padding-left:0;left:0;margin-left:-10%;'>"
                for (x in myObj) {
                    txt += "<tr><td>" + myObj[x].id + "</td><td>" + myObj[x].title + "</td><td>" + myObj[x].body +"</td><td>" + myObj[x].userId + "</td></tr>";
                }
                txt += "</table>"
                document.getElementById("result").innerHTML = txt;
                // document.write(xhr.response);

            }
            else {
                if (xhr.status == 300) {

                }

            }
        }
    }
}

function myFunction() {
    var x = document.getElementById("myDIV1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function Login() {
    // database.transaction(function (query) {
    // var results = [];
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    // database.transaction(function(query){
    //     query.executeSql('select * from user',[],function(u,results){
    //         var array = result.rows;

    //         for(var i = 0; i<array.length ; i++){


    //                alert(array);

    if (name === "nalini" && password === "nalini") {
        console.log("Login Successful");
        return true;
    }
    else {
        document.getElementById('Success').innerHTML = " Please check username&password";
     return false;
    }
    //  });

    //  });
    // })


    // });

}
