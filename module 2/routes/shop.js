const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>This is from middleware</h2>');
});

module.exports = router;
