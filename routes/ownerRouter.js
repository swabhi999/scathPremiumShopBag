const router = require('express')
               .Router();
const OwnerModel = require('../models/ownerModel');              


// Owner Dashboard Route
router.get('/', (req, res) => {
    res.send('Owner Dashboard');
});

console.log(process.env.NODE_ENV);
 if(process.env.NODE_ENV === 'development') {


   router.get('/create', async (req, res) => {

     const owner = await  OwnerModel.find()
     if (owner.length > 0) {
       return res
       .status(503)
       .send("you dont have permission to create owner");
     }
     //unpack/destructure req body
    let {password, email, fullname} = req.body;

        let newOwner  = await OwnerModel.create({
            password,
            email,
            fullname,
        })
        res.status(201).send(newOwner);
 })
 }

module.exports = router;