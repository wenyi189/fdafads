const mongo = require('mongodb').MongoClient;
let number = parseInt(process.argv[2]);
let url = 'mongodb://localhost:27017/learnyoumongo';
let firstName = process.argv[2];
let lastName = process.argv[3];
let data = {
  'firstName': firstName,
  'lastName': lastName
};

mongo.connect(url, (err, db) => {
  if(err) throw err;
  let docs = db.collection('docs')
  docs.insert(data, (err, logic) => {
    if(err) throw err
    console.log(JSON.stringify(data));
    db.close();
  });
});
