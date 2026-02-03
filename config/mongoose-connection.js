const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/scathPremiumBagShop', )
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch((err) => {
    console.log('MongoDB connection failed', err);
});
