const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log("Reached first middleware");
//     next()
// });

// app.use((req, res, next) => {
//     console.log("Reached second middleware");
//     res.send("<h1>logging response</h1>");
// })


app.use('/users', (req, res, next) => {
    console.log("Reached first middleware");
    res.send("<body><h1>User List</h1><ul><li>User 1</li></ul><ul><li>User 2</li></ul><ul><li>User 3</li></ul></body>");
});

app.use('/', (req, res, next) => {
    console.log("Reached second middleware");
    res.send("<h1>logging response</h1>");
})


app.listen(3000);
