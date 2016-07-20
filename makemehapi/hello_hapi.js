let hapi = require('hapi');
let portnumber = process.argv[2];
let server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: portnumber || 8080
});

server.route({
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    reply('Hello hapi');
  }
})

server.start((err) => {
  if(err)
    throw err;
  console.log('Server is running at:', server.info.uri );
})
