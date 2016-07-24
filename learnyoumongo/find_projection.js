const mongo = require('mongodb').MongoClient;
let number = parseInt(process.argv[2]);
let url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {
  let results = db.collection('parrots')
  .find({
    age: {
      $gt: number
    }
  }, {
    name: 1,
    age: 1,
    _id: 0
  }).toArray((err, document) => {
    console.log(document);
    db.close();
  });
});
