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
    image:Buffer,
    discountPrice:{
        type:Number,
        default:0,
    },
    price:Number,
    bgColor: String,
    textColor: String,
    image: String,
    panelColor: String,
   
})
product = mongoose.model('product',productSchema);

module.exports = product;