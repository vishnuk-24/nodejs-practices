const path = require('path');

// import express packages
const express = require('express');
const bodyParser = require('body-parser');

// create an express app
const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './views', '404.html'));
});

app.listen(3000);
