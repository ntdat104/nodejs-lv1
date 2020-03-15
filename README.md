# nodejs-lv1

# Bài 1: Module

module.exports = {
hostname: hostname,
port: port
}
const module = require("Địa chỉ của tập tin đó.")

# Bài 2: Cài đặt Nodemon

npm install -g nodemon

# Bài 3: Output HTML File

const http = require("http");
const fs = require("fs");

const config = require("./myModule/config");

function onRequest(req, res) {
  fs.readFile("./home.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("File not found!");
    } else {
      res.write(data);
    }

    res.end();
  });
}

const server = http.createServer(onRequest);
server.listen(config.port, config.hostname, () => {
  console.log(`http://${config.hostname}:${config.port}/`);
});

# Bài 4: Routing basic 01
