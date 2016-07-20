let http = require('http');
let map = require('through2-map');
let portnumber = process.argv[2];

http.createServer((req, res) => {
  if(req.method != 'POST'){
    return res.end('Send me a POST\n');
  }

  req.pipe(map((chunk) => {
    return chunk.toString().toUpperCase();
  })).pipe(res)
  
}).listen(portnumber);
