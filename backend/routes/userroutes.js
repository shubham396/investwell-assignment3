
const express = require("express");
const router = express.Router();

///////
const {middleware, loginmiddle, deletemiddleware} = require("../validation123/validation");

const bodyParser = require("body-parser");

const { controlFetchData, controlPostData, controldeletedata, controlupdatepatch, signFetchData  } = require("../controller/userconnect");




router.get('/user', controlFetchData)


router.post('/userpost',middleware, controlPostData)

//delete karne ke liye 

router.post('/delete', deletemiddleware ,controldeletedata)

router.post('/update', controlupdatepatch)


router.post('/signin',loginmiddle, signFetchData)




module.exports = router;

