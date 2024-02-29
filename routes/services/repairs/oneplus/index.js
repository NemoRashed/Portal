var express = require("express");
var router = express.Router();

let OneplusControllers = require("../../../../controllers/services/repairs/oneplus/index.js");


// Oneplus
//-------------------
router.get("/services/repairs/oneplus", OneplusControllers.Oneplus);

router.get(
  "/services/repairs/oneplus/phones",
  OneplusControllers.PhoneSeries
);
router.get(
  "/services/repairs/oneplus/phones/:phon",
  OneplusControllers.Phone
);
router.post(
  "/services/repairs/oneplus/phones/:phon",
  OneplusControllers.PhonePOST
);


module.exports = router;
