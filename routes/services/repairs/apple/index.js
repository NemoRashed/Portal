var express = require("express");
var router = express.Router();

let AppleControllers = require("../../../../controllers/services/repairs/apple/index.js");

// Apple
// ----------------
router.get("/services/repairs/apple", AppleControllers.Apple);

// iIphones
router.get("/services/repairs/apple/iphone", AppleControllers.IphoneSeries);
router.get("/services/repairs/apple/iphone/:phone", AppleControllers.Iphone);
router.post(
  "/services/repairs/apple/iphone/:phone",
  AppleControllers.IphonePOST
);
//Ipad
router.get("/services/repairs/apple/ipad", AppleControllers.IpadSeries);
router.get("/services/repairs/apple/ipad/:pad", AppleControllers.Ipad);
router.post("/services/repairs/apple/ipad/:pad", AppleControllers.IpadPOST);
//Apple Watch
router.get("/services/repairs/apple/watch", AppleControllers.WatchSeries);
router.get("/services/repairs/apple/watch/:wat", AppleControllers.Watch);
router.post("/services/repairs/apple/watch/:wat", AppleControllers.WatchPOST);

//Macbook
router.get("/services/repairs/apple/macbook", AppleControllers.Macbook);

module.exports = router;
