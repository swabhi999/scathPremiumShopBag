const mongoose = require('mongoose');


// PORDUCT

// name --- string
// image --string
// discount price
// price 
// bg-color
// text-color



const productSchema = mongoose.Schema({
    name: String,
    image: Buffer, // Stores image as binary data
    discount: {
        type: Number,
        default: 0,
    },
    price: Number,
    bgColor: String,
    textColor: String,
    panelColor: String,
});

const product = mongoose.model('product', productSchema);

module.exports = product;