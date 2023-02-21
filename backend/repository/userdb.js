const { connection } = require("../connection/db")




function getalldata(sql) {
    return new Promise(function (resolve) {
        connection.query(sql, function (err, result) {
            if (err) {
                return console.log(err);
            }
            resolve(result);
        })

    })

}

function postalldata(sql) {
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("POSTED")
            console.log(result)
        }

    })


}

function deletedata(sql) {
    console.log("shubh")
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("deleted")
            console.log(result)
        }
    })

}

function updatepatch(sql) {

    connection.query(sql, (err, res) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(res);
        }
    })
}
// async and await
const alldata= async (sql) =>{
    return new Promise((resolve)=> {
        connection.query(sql,(err, result)=> {
            if (err) {
             console.log(err);
            }
            return resolve(result);
        })

    })

}

// promise and promiseseseseeeeeesese
// function alldata(sql) {
//     return new Promise(function (resolve) {
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 return console.log(err);
//             }
//             return resolve(result);
//         })

//     })

// }


module.exports = { getalldata, postalldata, deletedata, updatepatch, alldata };