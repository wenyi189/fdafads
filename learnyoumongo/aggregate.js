const mongo = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/learnyoumongo';


mongo.connect(url, (err, db) => {
  if(err) throw err;
  let prices = db.collection('prices');
  prices.aggregate([
    { $match: {
      size: process.argv[2]
    }},
    { $group: {
      _id: 'average',
      average: {
        $avg: '$price'
      }
    }}
  ]).toArray((err, results) => {
    let o = results[0];
    console.log(Number(o.average).toFixed(2));
    db.close()
  });
});
