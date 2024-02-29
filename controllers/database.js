// DataBase 
const databaseDbConnection = require("../models/connections/database");
// OnePlus 
const oneplusDbConnection = require("../models/connections/oneplus");

// Main Model 
const PhoneModelOneplus = oneplusDbConnection.model("phone");

// Database Models
const PhoneModelDatabase = databaseDbConnection.model("phone");
const PhoneModelDatabaseTransfer = databaseDbConnection.model("phonetransfer");




// Home
const Home = function (req, res, next) {
  res.render("database/index", {
    title: "Database",
    user: req.user,
  });
};

// Transfer Collections to Database
const TransferCollections = function (req, res, next) {
  PhoneModelOneplus.find().then((result) => {
    PhoneModelDatabase.insertMany(result);
  });
  res.render("database/[id]", {
    title: "transfercollections",
    user: req.user,
  });
};

// Update Reg Collections & Transfered to database
const UpdateCollections = function (req, res, next) {
  
  PhoneModelOneplus.find().then((result) => {
    let bang = [];
    result.forEach((item) => {
      for (const key in item.repairs) {
        item.repairs[key].key = key;
      }
      bang.push(item);
    });
    PhoneModelDatabaseTransfer.insertMany(bang);
  });


  // Update List type Collections
  /*
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
*/

  res.render("database/[id]", {
    title: "UpdateCollections",
    user: req.user,
  });
  
};

// Move New Key Updated collections to original
const NewCollections = function (req, res, next) {
  PhoneModelDatabaseTransfer.find().then((result) => {
    PhoneModelOneplus.insertMany(result);
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
