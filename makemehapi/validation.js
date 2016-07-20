'use strict'
const Hapi = require('hapi');
const Joi = require('joi');
let portnumber = process.argv[2];

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: portnumber || 8080
});

server.route({
  method: 'GET',
  path: '/chickens/{breed}',
  config: {
    validate: {
      params: {
        with: Joi.string().required(),
        parameters: Joi.string().required()
      }
    }
  },
  handler: (req, reply) => {

  }
});

server.start((err) => {
  if(err) throw err
  console.log('server is running at:', server.info.uri);
});
