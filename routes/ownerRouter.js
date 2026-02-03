const router = require('express')
               .Router();


// Owner Dashboard Route
router.get('/', (req, res) => {
    res.send('Owner Dashboard');
});

module.exports = router;