const mongo = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/' + process.argv[2];
let id = process.argv[4];

mongo.connect(url, (err, db) => {
  if(err) throw err;
  let collection = db.collection(process.argv[3]);
  collection.remove({
    _id: id
  },
  (err, logic) => {
    if(err) throw err

    db.close();
  });
});
