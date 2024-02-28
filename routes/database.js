var express = require("express");
var router = express.Router();

let databaseControllers = require("../controllers/database.js");

// DataBase Changes
router.get("/database", databaseControllers.Home);
router.get(
  "/database/transfercollections",
  databaseControllers.TransferCollections
);
router.get(
  "/database/updatecollections",
  databaseControllers.UpdateCollections
);
router.get("/database/newcollections", databaseControllers.NewCollections);
router.get("/database/changeurlandsrc", databaseControllers.ChangeURLANDSRC);

module.exports = router;
