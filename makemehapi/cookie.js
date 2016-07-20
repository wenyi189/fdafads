'use strict'
const Hapi = require('hapi');
const Boom = require('boom');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080
});

server.state('session', {
  ttl: 10,
  encoding: 'base64json',
  path: '/',
  domain: 'localhost'
})

server.route({
  method: 'GET',
  path: '/set-cookie',
  config: {
    state: {
      parse: true,
      failAction: 'log'
    }
  },
  handler: (req, reply) => {
    reply('success').state('session', {key: 'makemehapi'});
  }
});

server.route({
  method: 'GET',
  path: '/check-cookie',
  handler: (req, reply) => {
    if(request.state.session){
      reply({ user: 'hapi'});
    }else{
      reply(Boom.unauthorized('Missing authentication'));
    }
  }
});
server.start((err) => {
  if(err) throw err
  console.log('server is running at:', server.info.uri);
});
