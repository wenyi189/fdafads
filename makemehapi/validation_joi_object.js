'use strict'
const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080
});

server.route({
  method: 'POST',
  path: '/login',
  config: {
    validate: {
      payload: Joi.object({
        isGuest: Joi.boolean(),
        username: Joi.string().when('isGuest', {is: false, then: Joi.required()}),
        accessToken: Joi.string().alphanum(),
        password: Joi.string().alphanum()
      })
      .options({allowUnknown: true})
      .without('accessToken', 'password')

    }
  },
  handler: (req, reply) => {
    reply('login successful');
  }
});

server.start((err) => {
  if(err) throw err
  console.log('server is running at:', server.info.uri);
});
