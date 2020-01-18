var mysql = require('mysql');

//  BASIC MySQL CONNECTION
var connection = mysql.createConnection({
    host:'localhost',
    port:  3306,
    user:'root',
    password:'root',
    database:'tacos_db'
});

connection.connect(function(err){
    if(err)throw err;
    console.log('Connected as id:  '+connection.threadId);
});

module.exports = connection;
