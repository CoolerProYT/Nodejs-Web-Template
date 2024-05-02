// routes/api.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.json([
        { message: 'This is API route.' },
    ]);
});

module.exports = router;
