const express = require("express");
const app = express();
const PORT = 5000;

const sendMail = require("./controllers/sendMail");

app.get("/", (req, res) => {
    res.send("I am a server");
});

app.get("/mail", sendMail);



const start = () => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
};

start();
