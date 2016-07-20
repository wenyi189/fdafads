'use strict'
const Hapi = require('hapi');
let portnumber = process.argv[2];
const Rot13 = require('rot13-transform');
const fs = require('fs');
const Path = require('path');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: portnumber || 8080

});

server.route({
  method: 'GET',
  path: '/',
  config: {
    handler: (req, reply) => {
      reply(fs.createReadStream(Path.join(__dirname, 'streams.txt')).pipe(Rot13()))
    }
  }
});

server.start((err) => {
  if(err) throw err
  console.log('server is running at:', server.info.uri);
});
