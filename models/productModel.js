const mongoose = require('mongoose');

// PORDUCT

// name --- string
// image --string
// discount price
// price 
// bg-color
// text-color


productSchema =  mongoose.Schema({
    name: String,
    discountPrice:{
        type:Number,
        default:0,
    },
    price:Number,
    bgColor: String,
    textColor: String,
    image: String,
   
})
product = mongoose.model('product',productSchema);

module.exports = product;