const express = require('express')
const app = express();
const port = 9001;
const mysql = require('mysql2');
const userRoute = require('./backend/routes/userroutes');


///////////////

const bodyParser = require("body-parser");

//const connection = require('mysql2/typings/mysql/lib/connection');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.static('frontend'));


app.use("/", userRoute);


// connection.query(
//     'select  * from signup ',
//     function(err, results) {
//       console.log(results); 
//       //console.log(fields); 
//     }
//   );
//////////////////////////////////////////

app.get('/', function(req, res){
  res.sendFile(__dirname+'./frontend/index.html');
});



app.listen(9001, () => {
    
    console.log("on port 8001")

});
