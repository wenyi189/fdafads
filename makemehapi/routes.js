'use strict'

let hapi = require('hapi');
let portnumber = process.argv[2];
let server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(portnumber || 8080)
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: (req, reply) => {
    reply('Hello ' + req.params.name);
  }
});

server.start((err) => {
  if(err)
    throw errl
  console.log('server is running at ', server.info.uri);
})
