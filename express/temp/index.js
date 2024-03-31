const express = require('express');
const app = express();
const PORT = 8000;

// Route handler for '/'
app.get('/', (req, res) => {
    // Sending a response
    res.send("Hello from express");
});


// Start the server
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
