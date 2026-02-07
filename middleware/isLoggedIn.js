const jwt = require("jsonwebtoken");
userModel = require("../models/userModel");


module.exports.isLoggedIn = (req,res,next)=>{


    if(!req.cookies.token){
        req.flash("error","You must be logged in to access this page")
        return res.redirect('/')
    }
    try{
        const decoded = jwt.verify(req.cookies.token,process.env.TEST)

        let user = userModel
        .findOne({email:decoded.email})
        .select("-password")

        //attach user to req object
        req.user = user
        next()
    }
    catch(err){
        flash("error","something went wrong")
        res.redirect('/')
    }
}
