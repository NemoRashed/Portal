var express = require("express");
var router = express.Router();

let diagnosticsControllers = require("../../../controllers/services/diagnostics/index.js");

router.get("/services/diagnostics", diagnosticsControllers.Home);
router.post("/services/diagnostics", diagnosticsControllers.POST);


module.exports = router;
