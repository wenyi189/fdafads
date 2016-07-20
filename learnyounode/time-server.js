let net = require('net');

let server = net.createServer((socket) => {
  let date = new Date();
  if(date.getMonth() < 10){
    month = '0' + (date.getMonth() + 1);
  }else{
    month = date.getMonth() + 1;
  }

  let minutes = 0;
  if(date.getMinutes() < 10){
    minutes = '0' + date.getMinutes().toString();
  }else{
    minutes = date.getMinutes();
  }

  socket.end(date.getFullYear() + '-' + month
  + '-' + date.getDate() + ' ' + date.getHours() + ':' + minutes + '\n');


});

server.listen(process.argv[2]);
