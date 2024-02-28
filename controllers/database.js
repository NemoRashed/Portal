const appleDbConnection = require("../models/connections/apple");
const IpadModelApple = appleDbConnection.model("ipad");
const databaseDbConnection = require("../models/connections/database");
const IpadModelDatabase = databaseDbConnection.model("ipad");

const IpadModelDatabase2 = databaseDbConnection.model("ipadtransfer");

// Home
const Home = function (req, res, next) {
  res.render("database", {
    title: "Database",
    user: req.user,
    style: "/stylesheets/index.css",
  });
};

// Transfer Collections to Database
const TransferCollections = function (req, res, next) {
  IpadModelApple.find().then((result) => {
    //   console.log(result);

    IpadModelDatabase.insertMany(result);
  });

  res.send("transfered to database");
};

// Update Reg Collections
const UpdateCollections = function (req, res, next) {
  IpadModelApple.find().then((result) => {
    // console.log(result[0].repairs.screen, "before going thru it all ");

    let bang = [];

    result.forEach((item) => {
      // console.log(item,"Item Index" + item.index);
      for (const key in item.repairs) {
        item.repairs[key].key = key;
      }

      bang.push(item);

      //     console.log(item, "Edited Item");
    });

    //  IpadModelApple.insertMany(bang);
    IpadModelDatabase2.insertMany(bang);
    console.log("New Connect Check");
    //   console.log(bang, "After going thru it all ");
  });

  /*
  const originalDoc = {
    _id: { $oid: "65a2425db353ebd1d3b09c3f" },
    model: "iPad Pro 11 Gen 1",
    repairs: {
      screen: { price: "240", time: "60", name: "Screen Repair" },
      battery: { price: "130", time: "60", name: "Battery Repair" },
      chargingport: { price: "120", time: "60", name: "Charging Port Repair" },
    },
    description: "IPad Pro 11 Gen 1 Service Repair Information",
    image: "ipadpro11gen1.png",
    url: "ipadpro11gen1",
  };
  // console.log(originalDoc, 'Original Doc');

  // Iterate through repairs and add 'key' field to each repair object
  for (const key in originalDoc.repairs) {
    originalDoc.repairs[key].key = key;
  }

  // console.log(originalDoc, 'Edited Doc');
*/
  res.send("Updated collections ");
};

module.exports = {
  Home,
  TransferCollections,
  UpdateCollections,
};
