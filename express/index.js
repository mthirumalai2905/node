const express = require('express');
const app = express();
const PORT = 8000;

// Set the views directory
app.set('views', __dirname + '/views');

// Set the view engine to use Handlebars
app.set('view engine', 'hbs');

// Define routes
app.get("/", (req, res) => {
    res.render('index'); // No need to specify the file extension
});

app.get('/hello', (req, res) => {
    res.send("Hello to you too");
    console.log('Hello');
});

// Start the server
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
