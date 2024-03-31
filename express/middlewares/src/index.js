const express = require('express');
const path = require("path")
const app = express();
const PORT = 8000;

// console.log(__dirname);



const staticPath = path.join(__dirname, "../public" );

//builtin middlewares
app.use(express.static(staticPath))

app.get('/', (req,res) => {
    res.send('Hello');
})

app.listen(PORT, () => {
    console.log("Listening...");
})