const {getalldata, postalldata,deletedata, updatepatch} = require("../repository/userdb");

function servicesGetAllData(cb)  {

    const sql = "select * from signup";

    const result = getalldata(sql,function(err,res){  

        // console.log(res);
        // cb(null,res);
        cb(null,res);
        return result;
        

    });
    /**/ 
    
}
function servicesPostAllData(newUser){
    const sql = `insert into signup values (
        "${newUser.first_name}",
        "${newUser.last_name}",
        ${newUser.phone_number},
        "${newUser.gender}",
        "${newUser.email}",
        "${newUser.password}")`;
    return postalldata(sql);
}

function servicesdeletedata(user){
    console.log("Shaktiman");
    const sql = `delete from signup where first_name = "${user.first_name}"`;
    return deletedata(sql); 
}

function servicesupdatepatch(user){
    const sql = `update signup set first_name = '${user.first_name}' where first_name= 'shubham'`;
    return updatepatch(sql);
}

module.exports={servicesGetAllData,servicesPostAllData,servicesdeletedata,servicesupdatepatch};