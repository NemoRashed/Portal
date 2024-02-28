const { body, validationResult } = require("express-validator");

const serviceDbConnection = require("../models/connections/service");
const ServicesModel = serviceDbConnection.model("listservice");
const RepairsModel = serviceDbConnection.model("listrepair");

const appleDbConnection = require("../models/connections/apple");
const AppleModel = appleDbConnection.model("listapple");
const IphoneSeriesModel = appleDbConnection.model("listiphone");
const IphoneModel = appleDbConnection.model("iphone");
const IpadSeriesModel = appleDbConnection.model("listipad");
const IpadModel = appleDbConnection.model("ipad");
const WatchSeriesModel = appleDbConnection.model("listwatch");
const WatchModel = appleDbConnection.model("watch");

const sonyDbConnection = require("../models/connections/sony");
const SonyModel = sonyDbConnection.model("listsony");
const ListConsoleModel = sonyDbConnection.model("listconsole");
const ConsoleModel = sonyDbConnection.model("console");

const Home = function (req, res, next) {
  ServicesModel.find()
    .then((result) => {
      res.render("services/index", {
        title: "Services",
        user: req.user,
        services: result,
      });
    })
    .catch((err) => res.send(err));
};

const Repairs = function (req, res, next) {
  RepairsModel.find()
    .then((result) => {
      res.render("services/repairs/index", {
        title: "Repairs",
        user: req.user,
        repairs: result,
      });
    })
    .catch((err) => res.send(err));
};

const Apple = function (req, res, next) {
  AppleModel.find()
    .then((result) => {
      res.render("services/repairs/apple/index", {
        title: "Apple",
        user: req.user,
        apples: result,
      });
    })
    .catch((err) => res.send(err));
};

const IphoneSeries = function (req, res, next) {
  IphoneSeriesModel.find()
    .then((result) => {
      res.render("services/repairs/apple/iphone/index", {
        title: "Iphone Series",
        user: req.user,
        iphones: result,
      });
    })
    .catch((err) => res.send(err));
};

const Iphone = function (req, res, next) {
  IphoneModel.find({ url: req.params.phone })
    .then((result) => {
      const phoneInfo = [];
      let person = result[0].repairs;

      for (let x in person) {
        phoneInfo.push(person[x]);
      }

      res.render("services/repairs/apple/iphone/[id]", {
        title: req.params.phone,
        user: req.user,
        iphone: result[0],
        repairs: phoneInfo,
      });
    })
    .catch((err) => res.send(err));
};

const IphonePOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/repairs/apple/iphone/" + req.body.url;

    const update = {
      [`repairs.${req.body.key}.price`]: req.body.price,
      [`repairs.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Iphone",
        user: req.user,
        iphone: result[0],
        repairs: phoneInfo,
        alert,
      });
    }

    IphoneModel.updateOne({ url: req.body.url }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];

const IpadSeries = function (req, res, next) {
  IpadSeriesModel.find()
    .then((result) => {
      res.render("services/repairs/apple/ipad/index", {
        title: "Ipad Series",
        user: req.user,
        ipads: result,
      });
    })
    .catch((err) => res.send(err));
};

const Ipad = function (req, res, next) {
  IpadModel.find({ url: req.params.pad })
    .then((result) => {
      const padInfo = [];
      let person = result[0].repairs;

      for (let x in person) {
        padInfo.push(person[x]);
      }

      res.render("services/repairs/apple/ipad/[id]", {
        title: req.params.pad,
        user: req.user,
        ipad: result[0],
        repairs: padInfo,
      });
    })
    .catch((err) => res.send(err));
};

const IpadPOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/repairs/apple/ipad/" + req.body.url;
    console.log(req.body, "body");
    const update = {
      [`repairs.${req.body.key}.price`]: req.body.price,
      [`repairs.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Ipad",
        user: req.user,
        iphone: result[0],
        repairs: padInfo,
        alert,
      });
    }

    IpadModel.updateOne({ url: req.body.url }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];

// Apple Watch

const WatchSeries = function (req, res, next) {
  WatchSeriesModel.find()
    .then((result) => {
      res.render("services/repairs/apple/watch/index", {
        title: "Watch Series",
        user: req.user,
        watchs: result,
      });
    })
    .catch((err) => res.send(err));
};

const Watch = function (req, res, next) {
  WatchModel.find({ url: req.params.wat })
    .then((result) => {
      console.log(result, result);

      const watInfo = [];
      let person = result[0].repairs;

      for (let x in person) {
        watInfo.push(person[x]);
      }

      res.render("services/repairs/apple/watch/[id]", {
        title: req.params.wat,
        user: req.user,
        watch: result[0],
        repairs: watInfo,
      });
    })
    .catch((err) => res.send(err));
};

const WatchPOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/repairs/apple/watch/" + req.body.url;
    console.log(req.body, "body");
    const update = {
      [`repairs.${req.body.key}.price`]: req.body.price,
      [`repairs.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Watch",
        user: req.user,
        watch: result[0],
        repairs: watInfo,
        alert,
      });
    }

    WatchModel.updateOne({ url: req.body.url }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];

const Macbook = function (req, res, next) {
  res.render("services/repairs/apple/macbook/index", {
    title: "Macbook",
    user: req.user,
  });
};

// Sony
//-----------------

const Sony = function (req, res, next) {
  SonyModel.find()
    .then((result) => {
      res.render("services/repairs/sony/index", {
        title: "Sony",
        user: req.user,
        sonys: result,
      });
    })
    .catch((err) => res.send(err));
};

const ConsoleSeries = function (req, res, next) {
  ListConsoleModel.find()
    .then((result) => {
      res.render("services/repairs/sony/consoles/index", {
        title: "Sony Console Series",
        user: req.user,
        consoles: result,
      });
    })
    .catch((err) => res.send(err));
};

const Console = function (req, res, next) {
  ConsoleModel.find({ url: req.params.con })
    .then((result) => {
      const consoleInfo = [];
      let person = result[0].repairs;

      for (let x in person) {
        consoleInfo.push(person[x]);
      }
     
      res.render("services/repairs/sony/consoles/[id]", {
        title: req.params.con,
        user: req.user,
        console: result[0],
        repairs: consoleInfo,
      });
    })
    .catch((err) => res.send(err));
};

const ConsolePOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/repairs/sony/consoles/" + req.body.url;
    const update = {
      [`repairs.${req.body.key}.price`]: req.body.price,
      [`repairs.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Consoles",
        user: req.user,
        console: result[0],
        alert,
      });
    }

    ConsoleModel.updateOne({ url: req.body.url }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];

module.exports = {
  Home,
  Repairs,
  Apple,
  IphoneSeries,
  Iphone,
  IphonePOST,
  IpadSeries,
  Ipad,
  IpadPOST,
  WatchSeries,
  Watch,
  WatchPOST,
  Macbook,
  Sony,
  ConsoleSeries,
  Console,
  ConsolePOST,
};
