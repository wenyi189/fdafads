let http = require('http');
let bl = require('bl');

http.get(process.argv[2],(response) => {
  response.pipe(bl((err, data) => {
    if(err) {
      return console.log('Error', err);
    }
    console.log(data.toString());
    http.get(process.argv[3], (response2) => {
      response2.pipe(bl((err2, data2) => {
        if(err2){
          return console.log('Error2', err2);
        }
        console.log(data2.toString());
        http.get(process.argv[4], (response3) => {
          response3.pipe(bl((err3, data3) => {
            if(err3){
              return console.log('Error3', err3);
            }
            console.log(data3.toString());
          }))
        })
      }))
    })
  }))
})
