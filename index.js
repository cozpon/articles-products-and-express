//jshint esversion:6
//this file is our entry point into our application
// app.js is our actual run-time file

const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;


http.createServer(app).listen(port, () => {
  console.log(`Server's UP: on ${port}`);
});