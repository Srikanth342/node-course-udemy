const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const MongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://srikanthchowdary342:5eAAFGtLNGJ1SM5O@cluster0.4s6prwt.mongodb.net/shop?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("connected!");
      _db = client.db();
      callback();
    })
    .catch((error) => {
      console.log("database.js", error);
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database connected";
};

exports.MongoConnect = MongoConnect;
exports.getDb = getDb;
