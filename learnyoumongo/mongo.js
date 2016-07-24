const mongo = require('mongodb').MongoClient;
let number = parseInt(process.argv[2]);
mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
  let results = db.collection('parrots')
  .find( { age: {$gt: number } })
  .toArray((err, document) => {
    console.log(document);
    db.close();
  });
});
