require("dotenv").config();
// to load environment variables from .env file
// console.log("JWT SECRET:", process.env.TEST);
const express = require("express");
const app = express();
const debug = require("debug")("app:server");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");
const bcrypt = require("bcrypt"); //hashing
const expressSession = require("express-session");
const flash = require("connect-flash");


const ownerRouter = require("./routes/ownerRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productsRouter");
const indexRouter = require("./routes/index");

// starting the database connection
const db = require("./config/mongoose-connection");

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET
}))
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Setting up the routers - AFTER middleware
app.use('/owners', ownerRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/', indexRouter);


app.listen(3000, () => {
    console.log('✓ Server is running on port 3000 goodjob');
});
