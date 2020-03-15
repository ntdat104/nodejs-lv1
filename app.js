const http = require("http");

const config = require("./myModule/config");
const func = require("./myModule/func");


const server = http.createServer(func.onRequest);
server.listen(config.port, config.hostname, () => {
  console.log(`http://${config.hostname}:${config.port}/`);
});
