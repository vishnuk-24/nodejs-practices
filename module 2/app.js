// import express packages
const express = require('express');

// create an express app
const app = express();

// creating middleware
app.use('/add-product', (req, res, next) => {
    console.log("Inside the 1st middleware.....");
    // next(); // jumps next middleware
    res.send('<h1>HHHHHHHHHHHIIIIIIIIIIIIIIIIIII</h2>');
});

app.use('/', (req, res, next) => {
    console.log("Inside the 2nd middleware.....");
    // send response from middleware
    res.send('<h1>This is from middleware</h2>');
});

app.listen(3000);
