const assert = require('assert');
let isCoolNumber = require(process.argv[2]);

assert.deepEqual(isCoolNumber(42), true, 'the number is not 42');
