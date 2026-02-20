const mongoose = require('mongoose');



///USER


// username  - string
// full name - string
// emial address  - string 
// cart  - []
//  isAdmin - boolean
// order no - number
// contact no -- number
// pictuer - string -- db


userSchema =  mongoose.Schema({
    username:String,  
    password: String,                                   
    email:String,
    fullname: {
        type: String,
        minLength:3,
        trim:true,
    },
    orders: {
        type: Array,
        default: [],
    },
    cart:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"product"
    }
   ],
    contactNo: Number,
    picture: String,
})


const user = mongoose.model('user',userSchema);

module.exports = user;