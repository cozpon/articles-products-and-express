//jshint esversion:6
const http = require('http');
const app = require('./server');
const port = process.env.PORT || 1234;


http.createServer(app).listen(port, () => {
  console.log(`Server's UP: on ${port}`);
});