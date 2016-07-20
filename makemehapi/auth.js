'use strict'
const Hapi = require('hapi');

const server = new Hapi.Server();

let validation = (request, username, password, callback) => {
  let isValid = username == user.username && password == user.password;
  callback(null, isValid, {});
}

let user = {
  username: 'hapi',
  password: 'auth'
};

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080
});

server.register(require('hapi-auth-basic'), (err) => {
  if(err) throw error
  server.auth.strategy('simple', 'basic', {validateFunc: validation});
  server.route({
    method: 'GET',
    path: '/',
    config: {
      auth: 'simple'
    },
    handler: (req, reply) => {
      reply('')
    }
  });
});


server.start((err) => {
  if(err) throw err
  console.log('server is running at:', server.info.uri);
});
