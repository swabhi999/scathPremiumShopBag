const router = require('express')
               .Router();

const upload = require('../config/multer-config');
const ProductModel = require('../models/productModel');


// Owner Dashboard Route
router.get('/',upload.single('image'),async  (req, res) => {

 let { name,discount,price,bgColor,textColor,panelColor} = req.body

    const product = await ProductModel.create({

        image:req.file.buffer,
        name,
        discount,
        price,
        bgColor,
        textColor,
        panelColor

    })
});

module.exports = router;