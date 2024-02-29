var express = require("express");
var router = express.Router();

let SamsungControllers = require("../../../../controllers/services/repairs/samsung/index.js");

// Samsung
// ----------------
router.get("/services/repairs/samsung", SamsungControllers.Samsung);

// Galaxy S
router.get("/services/repairs/samsung/galaxys", SamsungControllers.ListGalaxys);
router.get("/services/repairs/samsung/galaxys/:phone", SamsungControllers.Galaxys);
router.post(
  "/services/repairs/samsung/galaxys/:phone",
  SamsungControllers.GalaxysPOST
);

// Galaxy Note
router.get("/services/repairs/samsung/galaxynote", SamsungControllers.ListGalaxynote);
router.get("/services/repairs/samsung/galaxynote/:phone", SamsungControllers.Galaxynote);
router.post("/services/repairs/samsung/galaxynote/:phone", SamsungControllers.GalaxynotePOST);

//A Series
router.get("/services/repairs/samsung/galaxya", SamsungControllers.GalaxyA);

module.exports = router;
