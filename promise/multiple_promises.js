'use strict'

function all(arg_one, arg_two){
  let counter = 0;
  let result = [];
  return new Promise((fulfill, reject) => {
    // let counter = 0;
    arg_one.then((value) =>{
      counter++;
      result[0] = value;
      if(counter >= 2){
        fulfill(result);
      }
    });

    arg_two.then((value) => {
      counter++;
      result[1] = value
      if(counter >= 2){
        fulfill(result);
      }
    });
  });
};

all(getPromise1(), getPromise2())
.then(console.log);
