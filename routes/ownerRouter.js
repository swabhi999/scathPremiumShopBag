const router = require('express')
               .Router();


// Owner Dashboard Route
router.get('/', (req, res) => {
    res.send('Owner Dashboard');
});

console.log(process.env.NODE_ENV);
 if(process.env.NODE_ENV === 'development') {
   router.get('/create', (req, res) => {
    res.send('Manage Products Page');
});
 }

module.exports = router;