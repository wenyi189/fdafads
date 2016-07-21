'use strict'

function first(){
    return "A secret value";
}

function second(value){
  return value + ' another secret';
}

// let firstPromise = first();
// let secondPromise = firstPromise.then((value) => {
//   return second(value);
// });
//first().then(second).then(console.log)

Promise.resolve(first).then(second).then(console.log);





// var firstPromise = first();
//
// var secondPromise = firstPromise.then(function (val) {
//   return second(val);
// });
//
// secondPromise.then(console.log);
//
// // As an alternative to the code above, ou could also do this:
//first().then(second).then(console.log);
