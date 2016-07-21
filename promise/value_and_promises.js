'use strict'

function attachTitle(something){
  return 'DR. ' + something;
}

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);
