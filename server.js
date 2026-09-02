const http = require("http");
const PORT = 3000

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome message");
  } else if (req.url === "/about") {
    res.end("About page");
  } else if (req.url === "/contact") {
    res.end("Contact page");
  } else {
    res.writeHead(404);
    res.end("404 Error Message");
  }
});

server.listen(PORT, () => {
  console.log("Server running locally on http://localhost:3000");
});