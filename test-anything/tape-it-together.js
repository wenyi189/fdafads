let fancify = require(process.argv[2]);
const test = require('tape');
test(fancify,(t) => {
  t.equal(fancify('Hello'), '~*~Hello~*~');
  t.equal(fancify('Hello', true), '~*~HELLO~*~');
  t.equal(fancify('Hello', false, '!'), '~!~Hello~!~');
  t.end();
});
