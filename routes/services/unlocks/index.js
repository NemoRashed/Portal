var express = require("express");
var router = express.Router();

let unlocksControllers = require("../../../controllers/services/unlocks/index.js");

router.get("/services/unlocks", unlocksControllers.Home);
router.post("/services/unlocks", unlocksControllers.POST);


module.exports = router;
