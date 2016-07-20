let http = require('http');
let url = require('url');
let portnumber = process.argv[2];

http.createServer((req, res) => {
  if(req.method == 'GET'){
    let parsed = url.parse(req.url, true);
    let pathName = parsed.pathname;
    let date = new Date(parsed.query.iso)
    //console.log(date);
    res.writeHead(200, {'content-type': 'application/json'});
    switch(pathName){
      case '/api/parsetime':
        let parsetime = {
          'hour': date.getHours(),
          'minute': date.getMinutes(),
          'second': date.getSeconds()
        }
        res.write(JSON.stringify(parsetime));
        res.end();
        break;

      case '/api/unixtime':
        let unixtime = {
          'unixtime': date.getTime()
        }
        res.write(JSON.stringify(unixtime));
        res.end();
    }


  }else{
    return res.writeHead(404);
  }
}).listen(portnumber);
