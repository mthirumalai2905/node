const express = require('express');
const app = express();
const PORT = 8000;

// Set the views directory
app.set('views', __dirname + '/views');

// Set the view engine to use Handlebars
app.set('view engine', 'hbs');

const fs = require('fs');
const path = require('path');

const partialsDir = path.join(__dirname, 'views', 'partials');

fs.readdir(partialsDir, (err, files) => {
    if (err) {
        console.error('Error reading partials directory:', err);
        return;
    }
    console.log('Files in partials directory:', files);
});


// Define routes
app.get("/", (req, res) => {
    res.render('index'); // No need to specify the file extension
});

app.get('/about', (req,res) => {
    res.send("Welcome to the about us page");
})


app.get('/hello', (req, res) => {
    res.send("Hello to you too");
    console.log('Hello');
});

app.get('*', (req, res) => {
    res.send("<h1> Error: 404 Page Not Found</h1>")
})

// Start the server
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
