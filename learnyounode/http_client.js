let http = require('http');

http.get(process.argv[2], callback);


function callback(response){
  response.setEncoding("utf8");
  response.on("data", (data) =>{
    console.log(data);
  })

};
