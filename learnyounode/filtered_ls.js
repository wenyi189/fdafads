let fs = require('fs');
let path = require('path');




fs.readdir(process.argv[2], (err,list) => {
  list.forEach((item) => {
    if(path.extname(item) === '.' + process.argv[3]){
      console.log(item);
    }
  })
});

/*
console.log(fs.readdir(process.argv[2], (err, list) => {
  list.forEach((item, index, arry) => {
    if(path.extname(arry[index]) != ('.' + process.argv[3])){
      arry.slice(index-1, index-1);
    }
  })
}));
*/
