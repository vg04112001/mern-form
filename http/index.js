const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("You get home page as a response");
  } else if (req.url == "/abc") {
    res.end("You get Abc page as a response");
  } else if (req.url == "/usersapi") {
    // file read operation must be done only once when page requested and it will br fs.readFileSync
    fs.readFile(`${__dirname}/json/newJson.json`, "utf-8", (err, data) => {
      console.log(data);
      // const jsData = JSON.parse(data);
      res.end(data);
    });
  } else {
    res.writeHead("404", { "Content-type": "text/html" });
    res.end("You get 404 ans");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
