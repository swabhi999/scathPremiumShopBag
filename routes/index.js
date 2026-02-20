const express = require("express");
const { isLoggedIn } = require("../middleware/isLoggedIn");
const { logOutUser } = require("../controllers/authController");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");
const router = express.Router();


router.get('/', (req, res) => {
    let error = req.flash('error');
    res.render('index',{error,loggedin:false})
});

router.get('/shop',isLoggedIn, async (req,res)=>{
  let products = await productModel.find()
  let success = req.flash('success')
    res.render('shop',{products,success})

})

// Add to cart route (GET /addtocart/:productid)
router.get('/addtocart/:productid', isLoggedIn, async (req, res) => {
  // Use req.user directly (already set by isLoggedIn middleware)
  if (!req.user) {
    req.flash('error', 'User not found. Please log in again.');
    return res.redirect('/shop');
  }
  req.user.cart.push(req.params.productid);
  await req.user.save();
  req.flash('success', 'Product added to cart successfully!');
  res.redirect('/shop');
});
router.get('/cart', isLoggedIn, async (req, res) => {
  // Use req.user and populate cart
  const user = await userModel
  .findById(req.user._id)
  .populate('cart');

  res.render('cart', { user});
});

router.get('/logout',isLoggedIn,(req,res)=>{
    res.render('shop')
})

module.exports = router;