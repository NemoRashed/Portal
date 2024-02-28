const appleDbConnection = require("../models/connections/apple");
const IpadModelApple = appleDbConnection.model("ipad");
const IphoneModelApple = appleDbConnection.model("iphone");
const WatchModelApple = appleDbConnection.model("watch");
const ListWatchModelApple = appleDbConnection.model("listwatch");

// Data Base Models
const databaseDbConnection = require("../models/connections/database");
const IpadModelDatabase = databaseDbConnection.model("ipad");
const IpadModelDatabase2 = databaseDbConnection.model("ipadtransfer");

const IphoneModelDatabase = databaseDbConnection.model("iphone");
const IphoneModelDatabase2 = databaseDbConnection.model("iphonetransfer");

const WatchModelDatabase = databaseDbConnection.model("watch");
const WatchModelDatabase2 = databaseDbConnection.model("watchtransfer");

const ListWatchModelDatabase = databaseDbConnection.model("listwatch");
const ListWatchModelDatabase2 = databaseDbConnection.model("listwatchtransfer");

// Home
const Home = function (req, res, next) {
  res.render("database/index", {
    title: "Database",
    user: req.user,
  });
};

// Transfer Collections to Database
const TransferCollections = function (req, res, next) {
  ListWatchModelApple.find().then((result) => {
    ListWatchModelDatabase.insertMany(result);
  });
  res.render("database/[id]", {
    title: "transfercollections",
    user: req.user,
  });
};

// Update Reg Collections & Transfered to database
const UpdateCollections = function (req, res, next) {
  /*
  WatchModelApple.find().then((result) => {
    let bang = [];
    result.forEach((item) => {
      for (const key in item.repairs) {
        item.repairs[key].key = key;
      }
      bang.push(item);
    });
    WatchModelDatabase2.insertMany(bang);
  });
*/

  // Update List type Collections
  ListWatchModelApple.find().then((result) => {
    let bang = [];
    result.forEach((item) => {
      bang.push({
        _id: item._id,
        series: item.series,
        image: item.src,
        url: item.href,
        rank: item.rank,
      });
    });
    console.log(bang);
   ListWatchModelDatabase2.insertMany(bang);
  });


  res.render("database/[id]", {
    title: "UpdateCollections",
    user: req.user,
  });
  
};

// Move New Key Updated collections to original
const NewCollections = function (req, res, next) {
  ListWatchModelDatabase2.find().then((result) => {
    ListWatchModelApple.insertMany(result);
  });
  res.render("database/[id]", {
    title: "NewCollections",
    user: req.user,
  });
};

// Take Collections and Change the Href & src to Image & URL
const ChangeURLANDSRC = function (req, res, next) {
  // New Collection
  ListWatchModelDatabase2.find().then((result) => {
    ListWatchModelApple.insertMany(result);
  });

  IpadModelDatabase2.find().then((result) => {
    let bang = [];
    result.forEach((item) => {
      for (const key in item.repairs) {
        item.repairs[key].key = key;
      }
      bang.push(item);
    });

    // IpadModelApple.insertMany(bang);
  });

  res.render("database/[id]", {
    title: "ChangeURLANDSRC",
    user: req.user,
  });
};

module.exports = {
  Home,
  TransferCollections,
  UpdateCollections,
  NewCollections,
  ChangeURLANDSRC,
};
