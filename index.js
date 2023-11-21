// index.js
const express = require('express');
const path = require('path');
const ejs = require("ejs");
const app = express();
const port = 3000;

// Set up static file serving from the 'Static' folder
app.use('/', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');


// Define a route to serve the index.html file
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views', 'index.html'));
    const trainsObject = require('./images.json');
  
    // Convert the object keys to an array
    const trainsArray = Object.values(trainsObject);    
    res.render(path.join(__dirname, 'views', 'index.ejs'), {  trains: trainsArray }); // Renders the 'index.ejs' file with the 'trains' data
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
