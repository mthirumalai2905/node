const express = require('express');
const app = express();
const PORT = 8000;

// Route handler for '/'
app.get('/', (req, res) => {
    // Extracting the directory typed by the user
    const directory = req.url;

    // Sending a response
    res.send("Hello from express");

    // Logging the directory typed by the user to the console
    console.log("Directory: ", directory);
});

// Route handler for '/hello'
app.get('/hello', (req, res) => {
    res.send("Hello to you too");
    console.log('Hello');
});


// Start the server
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
