let hapi = require('hapi');
let portnumber = process.argv[2];
let server = new hapi.Server();
let Inert = require('inert');

server.connection({
  host: 'localhost',
  port: portnumber || 8080
});


server.register(Inert,(err)=> {
  if(err){
    throw err;
  }

});

server.route({
  method: 'GET',
  path: '/foo/bar/baz/{param}',
  handler: (req, reply) => {
    //file: "./public/index.html"
    reply.file('./public/directories.html');
  }
});


server.start((err)=>{
  if(err){
    throw err;
  }
  console.log('server is running at', server.info.uri);
});
