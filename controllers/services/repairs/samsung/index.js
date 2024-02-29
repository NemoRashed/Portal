const { body, validationResult } = require("express-validator");

const samsungDbConnection = require("../../../../models/connections/samsung");
const SamsungModel = samsungDbConnection.model("listsamsung");
const ListGalaxySModel = samsungDbConnection.model("listgalaxys");
const GalaxySModel = samsungDbConnection.model("galaxys");
const ListGalaxyNoteModel = samsungDbConnection.model("listgalaxynote");
const GalaxyNoteModel = samsungDbConnection.model("galaxynote");


const Samsung = function (req, res, next) {
  SamsungModel.find()
    .then((result) => {
      res.render("services/repairs/samsung/index", {
        title: "Samsung",
        user: req.user,
        samsungs: result,
      });
    })
    .catch((err) => res.send(err));
};

const ListGalaxys = function (req, res, next) {
  ListGalaxySModel.find()
    .then((result) => {
      res.render("services/repairs/samsung/galaxys/index", {
        title: "Galaxy S Series",
        user: req.user,
        galaxyss: result,
      });
    })
    .catch((err) => res.send(err));
};

const Galaxys = function (req, res, next) {
  GalaxySModel.find({ url: req.params.phone })
    .then((result) => {
      const phoneInfo = [];
      let person = result[0].repairs;

      for (let x in person) {
        phoneInfo.push(person[x]);
      }

      res.render("services/repairs/samsung/galaxys/[id]", {
        title: req.params.phone,
        user: req.user,
        galaxys: result[0],
        repairs: phoneInfo,
      });
    })
    .catch((err) => res.send(err));
};

const GalaxysPOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/repairs/samsung/galaxys/" + req.body.url;

    const update = {
      [`repairs.${req.body.key}.price`]: req.body.price,
      [`repairs.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Galaxy S",
        user: req.user,
        galaxys: result[0],
        repairs: phoneInfo,
        alert,
      });
    }

    GalaxySModel.updateOne({ url: req.body.url }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];

const ListGalaxynote = function (req, res, next) {
  ListGalaxyNoteModel.find()
    .then((result) => {
      res.render("services/repairs/samsung/galaxynote/index", {
        title: "Galaxy Note Series",
        user: req.user,
        galaxynotes: result,
      });
    })
    .catch((err) => res.send(err));
};

const Galaxynote = function (req, res, next) {
  GalaxyNoteModel.find({ url: req.params.phone })
    .then((result) => {
      const padInfo = [];
      let person = result[0].repairs;

      for (let x in person) {
        padInfo.push(person[x]);
      }

      res.render("services/repairs/samsung/galaxynote/[id]", {
        title: req.params.phone,
        user: req.user,
        galaxynote: result[0],
        repairs: padInfo,
      });
    })
    .catch((err) => res.send(err));
};

const GalaxynotePOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/repairs/samsung/galaxynote/" + req.body.url;
    const update = {
      [`repairs.${req.body.key}.price`]: req.body.price,
      [`repairs.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "GalaxyNote",
        user: req.user,
        galaxynote: result[0],
        repairs: padInfo,
        alert,
      });
    }

    GalaxyNoteModel.updateOne({ url: req.body.url }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];

const GalaxyA = function (req, res, next) {
  res.render("services/repairs/samsung/galaxya/index", {
    title: "GalaxyA",
    user: req.user,
  });
};

module.exports = {
  Samsung,
  ListGalaxys,
  Galaxys,
  GalaxysPOST,
  ListGalaxynote,
  Galaxynote,
  GalaxynotePOST,
  GalaxyA
};



