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
console.log(req.body, 'body')
    const update = {
      [`repairs.${req.body.name}.price`]: req.body.price,
      [`repairs.${req.body.name}.time`]: req.body.time,
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
};
