const mongoose = require('mongoose');



ownerSchema =  mongoose.Schema({
    username:String,  
    password: String,                                   
    email:String,
    products:{
        type: Array,
        default: [],
    },
    fullname: {
        type: String,
        minLength:3,
        trim:true,
    },
    isAdmin: Boolean,
    picture: String,
    gstno: String,
})


const owner = mongoose.model('owner',ownerSchema);

module.exports = owner;