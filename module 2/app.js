// import express packages
const express = require('express');
const bodyParser = require('body-parser');

// create an express app
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// creating middleware
app.use('/add-product', (req, res, next) => {
    console.log("Inside the 1st middleware.....");
    // next(); // jumps next middleware
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log("Inside the 2nd middleware.....");
    // send response from middleware
    res.send('<h1>This is from middleware</h2>');
});

app.listen(3000);
