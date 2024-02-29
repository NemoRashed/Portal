var express = require("express");
var router = express.Router();

let GoogleControllers = require("../../../../controllers/services/repairs/google/index.js");

// Google
//-------------------
router.get("/services/repairs/google", GoogleControllers.Google);

router.get("/services/repairs/google/pixel", GoogleControllers.PixelSeries);
router.get("/services/repairs/google/pixel/:pix", GoogleControllers.Pixel);
router.post("/services/repairs/google/pixel/:pix", GoogleControllers.PixelPOST);

module.exports = router;
