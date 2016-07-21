'use strict'
let promise = new Promise((fulfill, reject) => {
  fulfill('PROMISE VALUE');
  //reject(new Error('I DID NOT FIRE'));
})
.then(console.log);

console.log('MAIN PROGRAM');
