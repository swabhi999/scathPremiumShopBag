const bcrypt = require("bcrypt"); //hashing


async function hashedpassword(password){
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    return hash
}
module.exports.hashedpassword= hashedpassword;