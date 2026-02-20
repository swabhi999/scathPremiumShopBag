const router = require('express')
               .Router();

const upload = require('../config/multer-config');
const ProductModel = require('../models/productModel');


// Owner Dashboard Route
router.post('/create', upload.single('image'), async (req, res) => {
   try {
      let { name, discount, price, bgColor, textColor, panelColor } = req.body;
      const product = await ProductModel.create({
         image: req.file ? req.file.buffer : undefined, //ternary check 
         name,
         discount,
         price,
         bgColor,
         textColor,
         panelColor
      });
      req.flash('success', 'Product created successfully!');
      res.redirect('/owners/admin');
   } catch (error) {
      res.send(error.message);
   }
});

module.exports = router;