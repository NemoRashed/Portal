var express = require("express");
var router = express.Router();

let OneplusControllers = require("../../../../controllers/services/repairs/oneplus/index.js");


// Oneplus
//-------------------
router.get("/services/repairs/oneplus", OneplusControllers.Oneplus);

router.get(
  "/services/repairs/oneplus/phones",
  OneplusControllers.ConsoleSeries
);
router.get(
  "/services/repairs/oneplus/phones/:phon",
  OneplusControllers.Console
);
router.post(
  "/services/repairs/oneplus/phones/:phon",
  OneplusControllers.ConsolePOST
);


module.exports = router;
