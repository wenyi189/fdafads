const mongo = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {
  if(err) throw err;
  let parrots = db.collection('parrots');
  parrots.count({
    age: {
      $gt: parseInt(process.argv[2])
    }
  },
  (err, logic) => {
    if(err) throw err
    console.log(logic);
    db.close();
  });
});
