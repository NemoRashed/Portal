var express = require("express");
var router = express.Router();

let LGControllers = require("../../../../controllers/services/repairs/lg/index.js");


// LG
//-------------------
router.get("/services/repairs/lg", LGControllers.LG);

router.get(
  "/services/repairs/lg/phones",
  LGControllers.PhoneSeries
);
router.get(
  "/services/repairs/lg/phones/:phon",
  LGControllers.Phone
);
router.post(
  "/services/repairs/lg/phones/:phon",
  LGControllers.PhonePOST
);


module.exports = router;
