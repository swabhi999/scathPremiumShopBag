const router = require('express')
               .Router();


// Owner Dashboard Route
router.get('/', (req, res) => {
    res.send(' products are here');
});

module.exports = router;