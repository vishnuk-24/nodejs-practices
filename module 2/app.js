const http = require('http');

// import express packages
const express = require('express');

// create an express app
const app = express();

// creating middleware
app.use((req, res, next) => {
    console.log("Inside the 1st middleware.....");
    next(); // jumps next middleware
});

app.use((req, res, next) => {
    console.log("Inside the 2nd middleware.....");
});

const server = http.createServer(app);

server.listen(3000);
