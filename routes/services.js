var express = require("express");
var router = express.Router();

let servicesControllers = require("../controllers/services.js");

// Services
router.get("/services", servicesControllers.Home);
router.get("/services/repairs", servicesControllers.Repairs);
router.get("/services/repairs/apple", servicesControllers.Apple);

// Apple
// ----------------
// iIphones
router.get("/services/repairs/apple/iphone", servicesControllers.IphoneSeries);
router.get("/services/repairs/apple/iphone/:phone", servicesControllers.Iphone);
router.post(
  "/services/repairs/apple/iphone/:phone",
  servicesControllers.IphonePOST
);
//Ipad
router.get("/services/repairs/apple/ipad", servicesControllers.IpadSeries);
router.get("/services/repairs/apple/ipad/:pad", servicesControllers.Ipad);
router.post("/services/repairs/apple/ipad/:pad", servicesControllers.IpadPOST);
//Apple Watch
router.get("/services/repairs/apple/watch", servicesControllers.WatchSeries);
router.get("/services/repairs/apple/watch/:wat", servicesControllers.Watch);
router.post(
  "/services/repairs/apple/watch/:wat",
  servicesControllers.WatchPOST
);

//Macbook
router.get("/services/repairs/apple/macbook", servicesControllers.Macbook);

// Samsung
//-------------------

module.exports = router;
