const mysql = require('mysql2');


connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'frontend',
    password: 'Bholenath@396'
  });
  
  
connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });

module.exports = {connection};    
  
  
