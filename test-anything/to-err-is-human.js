let feedCat = require(process.argv[2]);
const test = require('tape');

test('chocolate should throw an error', (t) => {
  t.plan(2);
  t.throws(()=>{
    feedCat('chocolate');
  });
  t.equal(feedCat('broccoli'), 'yum');
  t.end();
});
