function getData(){
    var database = new DataAccessService();
    database.getConnection();
}
function createTable(){
    var das = new DataAccessService();
    var connection = das.getConnection();
    das.createTable(connection);
}
function insertData(){
    var das = new DataAccessService();
    var connection = das.getConnection();
    das.insertData(connection);
}

function fetchData(){
    var das = new DataAccessService();
    var connection = das.getConnection();
    var result = das.fetchData(connection);
    console.log(result);
}
function updateData(){
    var das = new DataAccessService();
    var connection = das.getConnection();
    das.updateData(connection);
}


function getDataFromAjax(){
    var data = new DataAccessService();
    data.fetchAjaxData();
}
/// Best practise

/* 

function getData(){
    this.getDBConnection().getConnection();
}
function createTable(){
    das.createTable(this.getDBConnection().getConnection());
}
function insertData(){
    das.insertData(this.getDBConnection().getConnection());
}
function fetchData(){
    var result = das.fetchData(this.getDBConnection().getConnection());
    console.log(result);
}
function updateData(){
    das.updateData(this.getDBConnection().getConnection());
}
function getDBConnection(){
    var database = new DataAccessService();
    return database;
}

*/

