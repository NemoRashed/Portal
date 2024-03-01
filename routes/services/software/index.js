var express = require("express");
var router = express.Router();

let softwareControllers = require("../../../controllers/services/software/index.js");

// Software
// ----------------
router.get("/services/software", softwareControllers.Software);

// Data Recovery & Transfer
router.get("/services/software/datarecovery", softwareControllers.Datarecovery);
router.post(
  "/services/software/datarecovery",
  softwareControllers.DatarecoveryPOST
);

// OS Installations
router.get("/services/software/osinstallations", softwareControllers.Osinstallations);
router.post(
  "/services/software/osinstallations",
  softwareControllers.OsinstallationsPOST
);

// Software Troublshooting
router.get("/services/software/troubleshooting", softwareControllers.Troubleshooting);
router.post(
  "/services/software/troubleshooting",
  softwareControllers.TroubleshootingPOST
);
// Virus and Malware Removal
router.get("/services/software/virusandmalwareremoval", softwareControllers.Virusandmalwareremoval);
router.post(
  "/services/software/virusandmalwareremoval",
  softwareControllers.VirusandmalwareremovalPOST
);

module.exports = router;

