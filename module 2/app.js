const http = require('http');

// import express packages
const express = require('express');

// create an express app
const app = express();

const server = http.createServer(app);

server.listen(3000);
