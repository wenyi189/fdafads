let http = require('http');
let bl = require('bl');

http.get(process.argv[2], callback);

function callback(response){
  response.pipe(bl((err, data) => {
    if(err) {
      return console.log('Error', err);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
  
};
