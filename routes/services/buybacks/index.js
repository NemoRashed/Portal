var express = require("express");
var router = express.Router();

let buybacksControllers = require("../../../controllers/services/buybacks/index.js");

router.get("/services/buybacks", buybacksControllers.Home);
router.post("/services/buybacks", buybacksControllers.POST);


module.exports = router;
