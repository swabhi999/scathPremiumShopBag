const jwt = require("jsonwebtoken");


const generateToken = (user)=>{

    console.log("JWT SECRET:", process.env.TEST);
 return jwt.sign({email:user.email,id:user._id},process.env.TEST) ;

}


module.exports.generateToken = generateToken