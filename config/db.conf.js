const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
    host     : '35.194.71.234',
    user     : 'user',
    password : 'password',
    database : 'db',
    port     : '32000'
});
dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = dbConn;
