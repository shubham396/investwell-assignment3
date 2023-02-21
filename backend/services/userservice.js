const { getalldata, postalldata, deletedata, updatepatch, alldata } = require("../repository/userdb");
const crypto = require("crypto-js")

const servicesGetAllData = () => {
    return new Promise((resolve) => {
        const sql = "select * from signup";
        const result = getalldata(sql);
        result.then((data) => {
            resolve(data);
        })
    })
    /**/
}
function servicesPostAllData(newUser) {
    var passencrypted = crypto.AES.encrypt(newUser.password, 'secret key 123').toString();
    const sql = `insert into signup values ("${newUser.username}","${newUser.last_name}",${newUser.phone_number},"${newUser.gender}","${newUser.email}","${passencrypted}")`;
    //console.log(newUser);
    return postalldata(sql);
}

function servicesdeletedata(user) {
    console.log("Shaktiman");
    const sql = `delete from signup where username = "${user.username}"`;
    return deletedata(sql);
}

function servicesupdatepatch(data) {
    console.log(data);
    var sql = `UPDATE signup SET 
    last_name = "${data.last_name}",
    phone_number = ${data.phone_number},
    gender = "${data.gender}",
    email = "${data.email}",
    password = "${data.password}"
    WHERE username = "${data.username}"`;
    return updatepatch(sql);
}

// in async and await
const signGetAllData = async (details) => {
    
//    return new Promise((resolve) => {
        const sql = `select * from signup where username= "${details.username}"`;
        const result = await alldata(sql);

       
            return new Promise((resolve)=> {
                resolve(result);
            })
}
    
    /**/


// in promise 
// const signGetAllData = (details) => {
    
//     return new Promise((resolve) => {
//         const sql = `select * from signup where username= "${details.username}"`;
//         const result = alldata(sql);

//         result.then((data) => {
//             console.log(data);
//             resolve(data);
//         })
//     })
//     /**/
// }

module.exports = { servicesGetAllData, servicesPostAllData, servicesdeletedata, servicesupdatepatch, signGetAllData};