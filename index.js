const http = require("http");
const fs = require("fs");
const content = "<h1> Hello World </h1>\n<p> This is Subodh... </p>";

fs.writeFile("index.html", content, (err) => {
  if (err) throw err;
  console.log("File created successfully");
});
const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
