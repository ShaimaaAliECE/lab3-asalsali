const mysql = require('mysql')

let conn = mysql.createConnection({
    host: '34.72.236.12',
    user: 'root',
    password: 'password',
    database: 'MyStoreDB',
    port: 80,
});

conn.connect();

conn.query(
    'CREATE TABLE AdminSlot (AdminName varchar(10), Time varchar(1))',
    (err, rows, fields) => { //create admin table
        if (err) {
            console.log(err);
        } 
    }
)

conn.query(
    'CREATE TABLE GuestSlot (GuestName varchar(10), Time varchar(1))',
    (err, rows, fields) => {        //create guest table
        if (err) {
            console.log(err);
        } 
    }
)

conn.end();
