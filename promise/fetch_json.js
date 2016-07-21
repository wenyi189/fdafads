'use strict'

let HTTP = require("q-io/http");

HTTP.read('http://localhost:1337').then((data) => {
  return JSON.parse(data);
})
.then(console.log)
.catch(console.log);
