// const control = require("../routes/userroutes");

const {servicesGetAllData,servicesPostAllData, servicesdeletedata, servicesupdatepatch} = require("../services/userservice");

const controlFetchData=(req,res) => {
    console.log("hello");
    const req1 = servicesGetAllData(function(err,result){
      return res.send(result);
    });
     return req1; 
  };

  const controlPostData=(req,res) => {
        const newUser = req.body;

        return servicesPostAllData(newUser);
  } 

  const controldeletedata = (req,res) => {
    console.log("shubha")
    const data = req.body;
    return servicesdeletedata(data);
  }

  const controlupdatepatch = (req,res) => {
    const data =req.body;
    return servicesupdatepatch(data);
  }

  
module.exports = {controlFetchData,controlPostData,controldeletedata,controlupdatepatch};
 