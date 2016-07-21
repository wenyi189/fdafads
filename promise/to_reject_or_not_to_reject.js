'use strict'
let promise = new Promise((fulfill, reject) => {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
})
.then(console.log, onReject);

function onReject(error){
  console.log(error.message);
}
