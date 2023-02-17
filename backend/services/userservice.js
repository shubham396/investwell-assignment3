const { getalldata, postalldata, deletedata, updatepatch, alldata } = require("../repository/userdb");

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
    const sql = `insert into signup values ("${newUser.first_name}","${newUser.last_name}",${newUser.phone_number},"${newUser.gender}","${newUser.email}","${newUser.password}")`;
    //console.log(newUser);
    return postalldata(sql);
}

function servicesdeletedata(user) {
    console.log("Shaktiman");
    const sql = `delete from signup where first_name = "${user.first_name}"`;
    return deletedata(sql);
}

function servicesupdatepatch(user) {
    const sql = `update signup set first_name = '${user.first_name}' where first_name= 'shubham'`;
    return updatepatch(sql);
}

// in async and await
const signGetAllData = async (details) => {
    
//    return new Promise((resolve) => {
        const sql = `select * from signup where first_name= "${details.username}"`;
        const result = await alldata(sql);

       
            return new Promise((resolve)=> {
                resolve(result);
            })
}
    
    /**/


// in promise 
// const signGetAllData = (details) => {
    
//     return new Promise((resolve) => {
//         const sql = `select * from signup where first_name= "${details.username}"`;
//         const result = alldata(sql);

//         result.then((data) => {
//             console.log(data);
//             resolve(data);
//         })
//     })
//     /**/
// }

module.exports = { servicesGetAllData, servicesPostAllData, servicesdeletedata, servicesupdatepatch, signGetAllData};