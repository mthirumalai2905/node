const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req.url);
  if (req.url == "/") {
    res.end("Hello from the other side");
  } else if (req.url == "/about") {
    res.end("Hello from the about page");
  } else if (req.url == "/contact") {
    res.end("Hello from the contact page");
  } else {
    res.writeHead(404, {"Content-type": "text/html" });
    res.end("<h1>This page doesnt exist</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on the port no 8000");
});
