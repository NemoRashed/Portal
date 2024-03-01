var express = require("express");
var router = express.Router();

let customizationControllers = require("../../../controllers/services/customization/index.js");

router.get("/services/customization", customizationControllers.Home);


router.post("/services/customization", customizationControllers.POST);


module.exports = router;
