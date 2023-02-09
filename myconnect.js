const express = require('express')
const app = express();
const port = 3001
const mysql = require('mysql2');
// const Pool = require('mysql2/typings/mysql/lib/Pool');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'frontend',
  password: 'Bholenath@396'
});

// Pool.query(`select * from signup`, (err, res) =>{
//     return console.log(res)
// });
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// connection.query(
//     'select  * from signup ',
//     function(err, results) {
//       console.log(results); 
//       //console.log(fields); 
//     }
//   );

  //////////////////////////////////////////


const bodyParser = require("body-parser");

//const connection = require('mysql2/typings/mysql/lib/connection');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.static('htmlfiles'));
  
app.get('/user', (req,res) => {
  console.log("hello");
    connection.query('select * from signup',
     function(err,result,fields){
        // if(err){
        //     return console.log(err)
        // }else{
        //     res.send(result)
        // }
        res.send(result);
        console.log(result);
    })

})
// yeh hai get.post

app.post('/userpost', (req,res) => {
  console.log("abcd")
  console.log(req.query)
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const phone_number = req.body.phone_number;
    ;
    const gender = req.body.gender;
    const email = req.body.email;
    const password = req.body.password;

    connection.query('insert into signup values(?,?,?,?,?,?)',[first_name,last_name,phone_number,gender,email,password],(err,result) => {
         if(err){
            console.log(err)
         }else {
            res.send("POSTED")
            console.log(result)
         }

    })
    
});


//delete karne ke liye 

// app.delete('/delete',(req,res) => {
//     const delid=req.params.first_name;
//     connection.query('delete from signup where first_name=?',[delid],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else {
//             res.send("deleted")
//             console.log(result)
//         }
//     })

// })

// app.patch('/update',(req,res)=>{
//     var user = req.body;
//     connection.query(`update signup set first_name = '${user.first_name}' where first_name= 'shubham'`,[user],(err,rows)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(rows)
//         }
//     })
// })


//////////////////////////////////////////////////////////////////////////////////////////////////
// connection query 

app.get('/', function(req, res){
    res.sendFile(__dirname+'/htmlfiles/index.html');
});

app.post('/createUser',function(req,res){
    console.log("shubham");    
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var phone_number = req.body.phone_number;
    var gender = req.body.gender;
    var email = req.body.email;
    var password = req.body.password; 

    connection.connect(function(error){
        
        if(error) throw error;

        var sql = "INSERT INTO signup(first_name, last_name, phone_number, gender, email, password) VALUES('"+first_name+"','"+last_name+"','"+phone_number+"','"+gender+"','"+email+"','"+password+"')";
        connection.query(sql,function(error, result){
            if(error) throw error;
            
            res.send('student register successfull'+result.insertId)
        })
    });
});


app.listen(3001, () => {
    
    console.log("on port 3001")

});
