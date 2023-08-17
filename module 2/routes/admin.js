const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log("Inside the 1st middleware.....");
    // next(); // jumps next middleware
    res.sendFile(path.join(__dirname, '../','views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
