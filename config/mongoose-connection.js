const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')('development:mongoose'); // the ('developer:mongoose') is a namespace without the environment variable it will not log anything


mongoose.connect(`${config.get("MONGODB_URI")}/scathPremiumBagShop`)
.then(() => {
    dbgr('MongoDB connected successfully buddy');
})
.catch((err) => {
    dbgr('MongoDB connection failed', err);
});
