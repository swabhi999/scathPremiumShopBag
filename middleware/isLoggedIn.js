const jwt = require("jsonwebtoken");
userModel = require("../models/userModel");


module.exports.isLoggedIn = async (req, res, next) => {
    if (!req.cookies.token) {
        req.flash("error", "You must be logged in to access this page");
        return res.redirect('/');
    }
    try {
        const decoded = jwt.verify(req.cookies.token, process.env.TEST);
        // Await the user lookup
        const user = await userModel.findOne({ email: decoded.email }).select("-password");
        if (!user) {
            req.flash("error", "User not found. Please log in again.");
            return res.redirect('/');
        }
        // Attach user to req object
        req.user = user;
        next();
    } catch (err) {
        req.flash("error", "Something went wrong");
        res.redirect('/');
    }
};
