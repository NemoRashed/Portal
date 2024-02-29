// DataBase
/*
const databaseDbConnection = require("../models/connections/database");
// Google
const samsungDbConnection = require("../models/connections/samsung");

// Main Model
const ListGalaxyNoteModelSamsung = samsungDbConnection.model("listgalaxynote");

// Database Models
const ListGalaxyNoteModelDatabase = databaseDbConnection.model("listgalaxynote");
// const ListGalaxyNoteModelDatabaseTransfer = databaseDbConnection.model("listgalaxynotetransfer");
*/
// Home
const Home = function (req, res, next) {
  res.render("database/index", {
    title: "Database",
    user: req.user,
  });
};

// Transfer Collections to Database
const TransferCollections = function (req, res, next) {
  ListGalaxyNoteModelSamsung.find().then((result) => {
    ListGalaxyNoteModelDatabase.insertMany(result);
  });
  res.render("database/[id]", {
    title: "transfercollections",
    user: req.user,
  });
};

// Update Reg Collections & Transfered to database
const UpdateCollections = function (req, res, next) {
  /*
  ListPixelModelGoogle.find().then((result) => {
    let bang = [];
    result.forEach((item) => {
      for (const key in item.repairs) {
        item.repairs[key].key = key;
      }
      bang.push(item);
    });
    ListPixelModelDatabaseTransfer.insertMany(bang);
  });

*/
  // Update List type Collections
  /*
List types 
        _id: item._id,
        series: item.series,
        image: item.src,
        url: item.href,
        rank: item.rank,
        
  Regular Series 
  _id: item._id,
        model: item.model,
        image: item.src,
        url: item.href,
        description: item.description,
        repairs: item.repairs,
  */
 
 ListGalaxyNoteModelSamsung.find().then((result) => {
    let bang = [];
    result.forEach((item) => {
      bang.push({
        _id: item._id,
        series: item.series,
        image: item.src,
        url: item.href,
        rank: item.rank
      });
    });
    console.log(bang);
  ListGalaxyNoteModelDatabaseTransfer.insertMany(bang);
  });

  res.render("database/[id]", {
    title: "UpdateCollections",
    user: req.user,
  });
};

// Move New Key Updated collections to original
const NewCollections = function (req, res, next) {
  /*
  ListGalaxySModelDatabaseTransfer.find().then((result) => {
    let bang = [];
    result.forEach((item) => {
      for (const key in item.repairs) {
        item.repairs[key].key = key;
      }
      bang.push(item);
    });
    GalaxySModelSamsung.insertMany(bang);
  });
*/



ListGalaxyNoteModelDatabaseTransfer.find().then((result) => {
  ListGalaxyNoteModelSamsung.insertMany(result);
  });


  


  res.render("database/[id]", {
    title: "NewCollections",
    user: req.user,
  });


/*
  ListPixelModelDatabaseTransfer.find().then((result) => {
    ListPixelModelGoogle.insertMany(result);
  });
  res.render("database/[id]", {
    title: "NewCollections",
    user: req.user,
  });

  */
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
