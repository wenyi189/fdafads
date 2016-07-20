let filter = require('./module.js');

filter(process.argv[2], process.argv[3],(err, data) => {
  if(err)
  return console.log('there is an error', err);

  data.forEach((item)=>{
    console.log(item);
  });

});
