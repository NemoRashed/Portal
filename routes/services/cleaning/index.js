var express = require("express");
var router = express.Router();

let cleaningControllers = require("../../../controllers/services/cleaning/index.js");

router.get("/services/cleaning", cleaningControllers.Home);
router.post("/services/cleaning", cleaningControllers.POST);


module.exports = router;
