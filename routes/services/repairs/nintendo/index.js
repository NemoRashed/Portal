var express = require("express");
var router = express.Router();

let NintendoControllers = require("../../../../controllers/services/repairs/nintendo/index.js");

// Nintendo
//-------------------
router.get("/services/repairs/nintendo", NintendoControllers.Nintendo);

router.get(
  "/services/repairs/nintendo/consoles",
  NintendoControllers.ConsoleSeries
);
router.get(
  "/services/repairs/nintendo/consoles/:con",
  NintendoControllers.Console
);
router.post(
  "/services/repairs/nintendo/consoles/:con",
  NintendoControllers.ConsolePOST
);

module.exports = router;
