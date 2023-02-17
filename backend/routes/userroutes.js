
const express = require("express");
const router = express.Router();

///////


const bodyParser = require("body-parser");

const { controlFetchData, controlPostData, controldeletedata, controlupdatepatch, signFetchData } = require("../controller/userconnect");




router.get('/user', controlFetchData)


router.post('/userpost', controlPostData)

//delete karne ke liye 

router.post('/delete', controldeletedata)

router.patch('/update', controlupdatepatch)


router.post('/signin', signFetchData)




module.exports = router;

