const Joi = require('@hapi/joi');


const schema = Joi.object({
    username: Joi.string()
        
        .min(3)
        .max(30)
        .required(),

    last_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),    

    password: Joi.string(),
        // .pattern(new RegExp('^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$')),

    confirmpassword: Joi.ref('password'),


    phone_number : Joi.string().length(10).pattern(/^\d+$/).required(),


       

    gender: Joi.string()
        .valid('male' , 'female')
        .required(),     
    

    
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    
        
    // access_token: [ 
    //     Joi.string(),
        
    // ],    
})


//    .xor('password', 'access_token')
    // .with('password', 'repeat_password');


// schema.validate({ username: 'abc', birth_year: 1994 });
// -> { value: { username: 'abc', birth_year: 1994 } }

const loginschema =Joi.object({
    username: Joi.string().min(3).max(30).required(),
     password: Joi.string(),
    //  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}@$')),

})

const deleteschema = Joi.object({
    username : Joi.string().min(3).max(30).required(),


})
const middleware = (req,res,next) =>{
    const{error} = schema.validate(req.body);
    if(error){
        const {details } = error;
        const message = details.map(i => i.message).join(',');
        console.log(error);
        return res.send(message);


    }
    else {
        next();
    }
}
const loginmiddle = (req,res,next) => {
    const{error} = loginschema.validate(req.body);
    if(error){
        const {details} = error;
        const message = details.map(i => i.message).join(',');
        console.log(error);
        return res.send(message);
    }
    else {
        next();
    }
}

const deletemiddleware = (req,res,next) =>{
    const{error} = deleteschema.validate(req.body);
    if(error){
        const {details } = error;
        const message = details.map(i => i.message).join(',');
        console.log(error);
        return res.send(message);


    }
    else {
        next();
    }
}



// Also -
module.exports = {middleware, loginmiddle, deletemiddleware};