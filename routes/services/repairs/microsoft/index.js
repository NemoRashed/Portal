var express = require("express");
var router = express.Router();

let MicrosoftControllers = require("../../../../controllers/services/repairs/microsoft/index.js");

// Microsoft
// ----------------
router.get("/services/repairs/microsoft", MicrosoftControllers.Microsoft);

// Surface Pro
router.get(
  "/services/repairs/microsoft/surfacepro",
  MicrosoftControllers.ListSurfacepro
);
router.get(
  "/services/repairs/microsoft/surfacepro/:pro",
  MicrosoftControllers.Surfacepro
);
router.post(
  "/services/repairs/microsoft/surfacepro/:pro",
  MicrosoftControllers.SurfaceproPOST
);

//Surface Book
router.get(
  "/services/repairs/microsoft/surfacebook",
  MicrosoftControllers.ListSurfacebook
);
router.get(
  "/services/repairs/microsoft/surfacebook/:book",
  MicrosoftControllers.Surfacebook
);
router.post(
  "/services/repairs/microsoft/surfacebook/:book",
  MicrosoftControllers.SurfacebookPOST
);

// Xbox
router.get("/services/repairs/microsoft/xbox", MicrosoftControllers.ListXbox);
router.get("/services/repairs/microsoft/xbox/:box", MicrosoftControllers.Xbox);
router.post(
  "/services/repairs/microsoft/xbox/:box",
  MicrosoftControllers.XboxPOST
);

module.exports = router;
