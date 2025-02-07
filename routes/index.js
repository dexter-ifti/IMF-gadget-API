const express = require('express');

const router = express.Router();

// GET /api/
router.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = router;