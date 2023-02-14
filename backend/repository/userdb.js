const {connection} = require("../connection/db")

function getalldata(sql, cb) {
    let result;

    const getalldata = connection.query(sql,function(err,result){
        if(err){
        //   res.send(result);
          return console.log(err);
      }
    //   result =res;
      console.log(result);
      cb(null,result)
      return result; 
})
    return getalldata;
}

function postalldata(sql) {
    connection.query(sql,(err,result) => {
        if(err){
           console.log(err)
        }else {
           console.log("POSTED")
           console.log(result)
        }

   })
   

}

function deletedata(sql) {
    console.log("shubh")
    connection.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }else {
            console.log("deleted")
            console.log(result)
        }
    })
    
}

function updatepatch(sql){
    
    connection.query(sql,[user],(err,rows)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(rows)
        }
    })
}


module.exports = {getalldata,postalldata,deletedata,updatepatch};