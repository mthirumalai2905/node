const express = require('express');
const app  = express();
const PORT = 8000;

app.get('/', (req,res) => {
    res.send("Welcome to my home page");
})

app.get('/home', (req,res) => {
    res.send("Welcome to my home page");
})

app.get('/about', (req,res) => {
    res.send("Welcome to about page");
})

app.listen(PORT, () => {
    console.log("Listening...")
})