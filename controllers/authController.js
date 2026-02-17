const userModel = require("../models/userModel");
const { comparePassword } = require("../utils/comparePassword");
const { generateToken } = require("../utils/generateToken");
const { hashedpassword } = require("../utils/hashedPassword");

    async function registerUser(req,res) {
     try {
        let { fullname, password, email } = req.body;
        let user = await userModel.findOne({ email });
        if(user) 
            return res.status(400).send("user already exists");
        
      if(!fullname || !password || !email) 
            return res.status(400).send("please fill all the fields")
        
        
    const hashedPassword = await hashedpassword(password);
    console.log(hashedPassword);

    let createdUser = await userModel.create({
            fullname,
            password: hashedPassword,
            email,
          });
          let token = generateToken(createdUser);
          res.cookie("token", token,)

    // res.status(201).send(user);
  } catch(err) {
    res.status(500).send(err);
  }
}

module.exports.registerUser = registerUser;

//login user controller
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Please fill all the fields");
    }

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).send("something went wrong");
    }

    // Compare password
    const ismatched = await comparePassword(password, user.password);
    if (!ismatched) {
      return res.status(401).send("something went wrong");
    }

    // Generate token
    const token = generateToken(user);

    res.cookie("token", token)

    return res.status(200).send("Login successful");

  } catch (err) {
    return res.status(500).send(err.message);
  }
}

module.exports.loginUser = loginUser;



module.exports.logOutUser = (req,res)=>{
    res.clearCookie("token")
    res.status(200).redirect("/")
}   