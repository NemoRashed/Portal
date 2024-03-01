const { body, validationResult } = require("express-validator");

const softwareDbConnection = require("../../../models/connections/software");
const SoftwareModel = softwareDbConnection.model("listsoftware");

const DatarecoveryModel = softwareDbConnection.model("datarecovery");
const OsinstallationsModel = softwareDbConnection.model("osinstallations");
const TroubleshootingModel = softwareDbConnection.model("troubleshooting");
const VirusandmalwareremovalModel = softwareDbConnection.model(
  "virusandmalwareremoval"
);

const Software = function (req, res, next) {
  SoftwareModel.find()
    .then((result) => {
      res.render("services/software/index", {
        title: "Software",
        user: req.user,
        softwares: result,
      });
    })
    .catch((err) => res.send(err));
};

// Datarecovery
const Datarecovery = function (req, res, next) {
  DatarecoveryModel.find({ name: "Data Recovery" })
    .then((result) => {
      const Info = [];
      let person = result[0].types;
      for (let x in person) {
        Info.push(person[x]);
      }
      res.render("services/software/datarecovery/index", {
        title: "datarecovery",
        user: req.user,
        datarecovery: result[0],
        types: Info,
      });
    })
    .catch((err) => res.send(err));
};

const DatarecoveryPOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/software/datarecovery";

    const update = {
      [`types.${req.body.key}.price`]: req.body.price,
      [`types.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "datarecovery",
        user: req.user,
        alert,
      });
    }

    DatarecoveryModel.updateOne({ name: "Data Recovery" }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];

// Osinstallations

const Osinstallations = function (req, res, next) {
  OsinstallationsModel.find({ name: "OS Installations" })
    .then((result) => {
      const Info = [];
      let person = result[0].types;
      for (let x in person) {
        Info.push(person[x]);
      }
      res.render("services/software/osinstallations/index", {
        title: "OS Installations",
        user: req.user,
        osinstallation: result[0],
        types: Info,
      });
    })
    .catch((err) => res.send(err));
};

const OsinstallationsPOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/software/osinstallations";

    const update = {
      [`types.${req.body.key}.price`]: req.body.price,
      [`types.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "osinstallations",
        user: req.user,
        alert,
      });
    }

    OsinstallationsModel.updateOne({ name: "OS Installations" }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];

// Troubleshooting
const Troubleshooting = function (req, res, next) {
  TroubleshootingModel.find({ name: "Troubleshooting" })
    .then((result) => {
      const Info = [];
      let person = result[0].types;
      for (let x in person) {
        Info.push(person[x]);
      }
      res.render("services/software/troubleshooting/index", {
        title: "Troubleshooting",
        user: req.user,
        troubleshooting: result[0],
        types: Info,
      });
    })
    .catch((err) => res.send(err));
};

const TroubleshootingPOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/software/troubleshooting";

    const update = {
      [`types.${req.body.key}.price`]: req.body.price,
      [`types.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "troubleshooting",
        user: req.user,
        alert,
      });
    }

    TroubleshootingModel.updateOne({ name: "Troubleshooting" }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];

// Virusandmalwareremoval
const Virusandmalwareremoval = function (req, res, next) {
  VirusandmalwareremovalModel.find({ name: "Virus and Malware Removal" })
    .then((result) => {
      const Info = [];
      let person = result[0].types;
      for (let x in person) {
        Info.push(person[x]);
      }
      res.render("services/software/virusandmalwareremoval/index", {
        title: "Virus and Malware Removal",
        user: req.user,
        virusandmalwareremoval: result[0],
        types: Info,
      });
    })
    .catch((err) => res.send(err));
};

const VirusandmalwareremovalPOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/software/virusandmalwareremoval";

    const update = {
      [`types.${req.body.key}.price`]: req.body.price,
      [`types.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "virusandmalwareremoval",
        user: req.user,
        alert,
      });
    }

    VirusandmalwareremovalModel.updateOne(
      { name: "Virus and Malware Removal" },
      update
    )
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];

module.exports = {
  Software,
  Datarecovery,
  DatarecoveryPOST,
  Osinstallations,
  OsinstallationsPOST,
  Troubleshooting,
  TroubleshootingPOST,
  Virusandmalwareremoval,
  VirusandmalwareremovalPOST,
};
