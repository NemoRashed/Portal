var express = require("express");
var router = express.Router();

let SonyControllers = require("../../../../controllers/services/repairs/sony/index.js");

// Sony
//-------------------
router.get("/services/repairs/sony", SonyControllers.Sony);

router.get(
  "/services/repairs/sony/consoles",
  SonyControllers.ConsoleSeries
);
router.get(
  "/services/repairs/sony/consoles/:con",
  SonyControllers.Console
);
router.post(
  "/services/repairs/sony/consoles/:con",
  SonyControllers.ConsolePOST
);

module.exports = router;
