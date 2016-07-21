'use strict'
let promise = new Promise((fulfill, reject) => {
  setTimeout(() => {

    reject(new Error('REJECTED!'));
  }, 300)
})
.then(function(){}, onReject);

function onReject(error){
  console.log(error.message);
}
