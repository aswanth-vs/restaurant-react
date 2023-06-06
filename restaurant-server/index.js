const cors = require("cors");
const jsonserver = require("json-server");

//create a server
const server = jsonserver.create();

//setup path for db.json
const router = jsonserver.router("db.json");

//middleware used by JSON server for asynchronous ops
const middleware = jsonserver.defaults();

//set up PORT
const port = process.env.PORT || 4000;

//use in server
server.use(middleware);
server.use(router);

server.listen(port, () => {
  console.log(`JSON server started at ${port}`);
});
