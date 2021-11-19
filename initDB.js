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
    'CREATE TABLE AdminTimes (AvailableTime varchar(5))',
    (err, rows, fields) => {
        if (err) {
            console.log(err);
        } else {
            console.log('AdminTimes Created')
        }
    }
)

conn.query(
    'CREATE TABLE GuestAvailabilities (GuestName varchar(20), AvailableTime varchar(5))',
    (err, rows, fields) => {
        if (err) {
            console.log(err);
        } else {
            console.log('GuestAvailabilities Created')
        }
    }
)

conn.end();
