// const control = require("../routes/userroutes");

const { details } = require("@hapi/joi/lib/errors");

const {validateSignup } = require('../validation123/validation');
const crypto=require("crypto-js")

const {servicesGetAllData,servicesPostAllData, servicesdeletedata, servicesupdatepatch, signGetAllData} = require("../services/userservice");

const controlFetchData=(req,res) => {
    console.log("hello");
    const req1 = servicesGetAllData();

      req1.then((data)=>{
        res.send(data);
      })
    
  }
// main post -->
  const controlPostData= (req,res) => {
        const newUser = req.body;

        return servicesPostAllData(newUser);
  } 

  //--> yaha tak 
// yaha se time pass hai 
  // const controlPostData=(req,res) => {
  //   const {error, value} =validateSignup(req.body);

    // if(error) {
    //   console.log(error);
    //   return res.send(error,details);
    // }

// } yaha tak 

  const controldeletedata = (req,res) => {
    console.log("shubha")
    const data = req.body;
    return servicesdeletedata(data);
  }

  const controlupdatepatch = (req,res) => {
    const data =req.body;
    console.log("hello buddy",data);
    return servicesupdatepatch(data);
  }

  // In async and await
  const signFetchData= async (req,res) => {

    // console.log(req.body);
    const value1 = req.body;
    console.log("hell");
    const req1 = await signGetAllData(value1);

    if(req1.length === 0) {
      console.log("length is zero ");
    }
    
    const decrypted = crypto.AES.decrypt(req1[0].password,'secret key 123' )
    var passde = decrypted.toString(crypto.enc.Utf8)
    console.log(passde)

    if(passde != value1.password){
      return res.send("Invalid credentials!")
      
    }
    else {

    
    // console.log("hello boldo ji");
    //  if(req1.length==0){
    //   res.send("No user found!");

    // }
    // if (req1[0].password === value1.password ){
    //   console.log("mai yaha tu kahan ")
      let senddata = {
        username : req1[0].username,
        last_name : req1[0].last_name,
        phone_number : req1[0].phone_number,
        gender : req1[0].gender,
        email : req1[0].email 


      
      };
      res.send(senddata);
    }
    
  }  

//promise mai hai yeh 
  // const signFetchData=(req,res) => {
  //   // console.log(req.body);
  //   const value1 = req.body;
  //   console.log("hell");
  //   const req1 = signGetAllData(value1);
  //   //  console.log(res);
  //  req1.then((data)=>{
  //       res.send(data);
  //     })
    
  // }  
  
module.exports = {controlFetchData,controlPostData,controldeletedata,controlupdatepatch , signFetchData};
 