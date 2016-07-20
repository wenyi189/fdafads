let hapi = require('hapi');
let portnumber = process.argv[2];
let vision = require('vision');
let path = require('path');

let server = new hapi.Server();


server.connection({
  host: 'localhost',
  port: portnumber || 8080
});

server.register(vision,(err)=> {
  if(err){
    throw err;
  }

});

server.views({
  engines: {
    html:require('handlebars')
  },
  path: path.join(__dirname, 'templates')
})

server.route({
  method: 'GET',
  path: '/',
  handler: {
    //file: "./public/index.html"
    //reply.file('./public/directories.html');
    view: 'index.html'
  }
});


server.start((err)=>{
  if(err){
    throw err;
  }
  console.log('server is running at', server.info.uri);
});
