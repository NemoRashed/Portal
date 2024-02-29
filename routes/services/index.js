var express = require("express");
var router = express.Router();

let servicesControllers = require("../../controllers/services/index.js");

router.get("/services", servicesControllers.Home);

module.exports = router;
