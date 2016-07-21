'use strict'

const HTTP = require("q-io/http");

HTTP.read('http://localhost:7000').then((id) => {
  return HTTP.read('http://localhost:7001/' + id);
})
.then((data) => {
  console.log(JSON.parse(data));
})
.catch(console.log);
