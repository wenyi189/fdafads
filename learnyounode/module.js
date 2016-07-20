let fs = require('fs');
let path = require('path');


module.exports = function beingCalled(dir, ext, callback){
  fs.readdir(dir,(err, data) => {
    if(err) return callback(err);
    data = data.filter((filename) => {
      return path.extname(filename) === '.' + ext;
    });
    callback(null, data);
  });
};
