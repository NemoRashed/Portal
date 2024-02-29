var express = require("express");
var router = express.Router();

let repairsControllers = require("../../../controllers/services/repairs/index.js");

router.get("/services/repairs", repairsControllers.Home);

module.exports = router;
