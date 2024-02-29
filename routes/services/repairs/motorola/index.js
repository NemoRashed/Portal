var express = require("express");
var router = express.Router();

let MotorolaControllers = require("../../../../controllers/services/repairs/motorola/index.js");


// Motorola
//-------------------
router.get("/services/repairs/motorola", MotorolaControllers.Home);



module.exports = router;
