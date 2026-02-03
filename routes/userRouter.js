const router = require('express')
               .Router();

// Owner Dashboard Route
router.get('/', (req, res) => {
    res.send('user is here');
});

module.exports = router;