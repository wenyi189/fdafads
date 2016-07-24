const mongo = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/learnyoumongo';
let databaseName = process.argv[2];
// let dataToUpdate = {
//   age: 40
// };

mongo.connect(url, (err, db) => {
  if(err) throw err;
  let users = db.collection('users')
  users.update({
    username: 'tinatime'
  }, {
    $set: {
      age: 40
    }
  },
  (err, logic) => {
    if(err) throw err

    db.close();
  });
});
