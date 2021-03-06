var mysql = require('mysql');
var connection;

//  BASIC MySQL CONNECTION
// var connection = mysql.createConnection({
//     host:'localhost',
//     port:  3306,
//     user:'root',
//     password:'root',
//     database:'tacos_db'
// });

// connection.connect(function(err){
//     if(err)throw err;
//     console.log('Connected as id:  '+connection.threadId);
// });

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}   else {
    connection = mysql.createConnection({
        host:  'localhost',
        user:  'root',
        password:  'root',
        database:  'tacos_db'
    });
};

connection.connect();
module.exports = connection;
