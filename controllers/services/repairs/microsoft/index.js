const { body, validationResult } = require("express-validator");

const microsoftDbConnection = require("../../../../models/connections/microsoft");
const MicrosoftModel = microsoftDbConnection.model("listmicrosoft");

const ListSurfaceproModel = microsoftDbConnection.model("listsurfacepro");
const SurfaceproModel = microsoftDbConnection.model("surfacepro");

const ListSurfacebookModel = microsoftDbConnection.model("listsurfacebook");
const SurfacebookModel = microsoftDbConnection.model("surfacebook");

const ListXboxModel = microsoftDbConnection.model("listxbox");
const XboxModel = microsoftDbConnection.model("xbox");


const Microsoft = function (req, res, next) {
  MicrosoftModel.find()
    .then((result) => {
      res.render("services/repairs/microsoft/index", {
        title: "Microsoft",
        user: req.user,
        microsofts: result,
      });
    })
    .catch((err) => res.send(err));
};



const ListSurfacepro = function (req, res, next) {
  ListSurfaceproModel.find()
    .then((result) => {
      res.render("services/repairs/microsoft/surfacepro/index", {
        title: "Surfacepro Series",
        user: req.user,
        surfacepros: result,
      });
    })
    .catch((err) => res.send(err));
};

const Surfacepro = function (req, res, next) {
  SurfaceproModel.find({ url: req.params.pro })
    .then((result) => {
      const phoneInfo = [];
      let person = result[0].repairs;

      for (let x in person) {
        phoneInfo.push(person[x]);
      }

      res.render("services/repairs/microsoft/surfacepro/[id]", {
        title: req.params.pro,
        user: req.user,
        surfacepro: result[0],
        repairs: phoneInfo,
      });
    })
    .catch((err) => res.send(err));
};

const SurfaceproPOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/repairs/microsoft/surfacepro/" + req.body.url;

    const update = {
      [`repairs.${req.body.key}.price`]: req.body.price,
      [`repairs.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Surfacepro",
        user: req.user,
        surfacepro: result[0],
        repairs: phoneInfo,
        alert,
      });
    }

    SurfaceproModel.updateOne({ url: req.body.url }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];



const ListSurfacebook = function (req, res, next) {
  ListSurfacebookModel.find()
    .then((result) => {
      res.render("services/repairs/microsoft/surfacebook/index", {
        title: "SurfaceBook Series",
        user: req.user,
        surfacebooks: result,
      });
    })
    .catch((err) => res.send(err));
};

const Surfacebook = function (req, res, next) {
  SurfacebookModel.find({ url: req.params.book })
    .then((result) => {
      const padInfo = [];
      let person = result[0].repairs;

      for (let x in person) {
        padInfo.push(person[x]);
      }

      res.render("services/repairs/microsoft/surfacebook/[id]", {
        title: req.params.book,
        user: req.user,
        surfacebook: result[0],
        repairs: padInfo,
      });
    })
    .catch((err) => res.send(err));
};

const SurfacebookPOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/repairs/microsoft/surfacebook/" + req.body.url;
    const update = {
      [`repairs.${req.body.key}.price`]: req.body.price,
      [`repairs.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Surfacebook",
        user: req.user,
        surfacebook: result[0],
        alert,
      });
    }

    SurfacebookModel.updateOne({ url: req.body.url }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];

// XBox
const ListXbox = function (req, res, next) {
  ListXboxModel.find()
    .then((result) => {
      res.render("services/repairs/microsoft/xbox/index", {
        title: "Xbox Series",
        user: req.user,
        xboxs: result,
      });
    })
    .catch((err) => res.send(err));
};

const Xbox = function (req, res, next) {
  XboxModel.find({ url: req.params.box })
    .then((result) => {
      const watInfo = [];
      let person = result[0].repairs;

      for (let x in person) {
        watInfo.push(person[x]);
      }

      res.render("services/repairs/microsoft/xbox/[id]", {
        title: req.params.box,
        user: req.user,
        xbox: result[0],
        repairs: watInfo,
      });
    })
    .catch((err) => res.send(err));
};

const XboxPOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/repairs/microsoft/xbox/" + req.body.url;
    const update = {
      [`repairs.${req.body.key}.price`]: req.body.price,
      [`repairs.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Xbox",
        user: req.user,
        xbox: result[0],
        repairs: watInfo,
        alert,
      });
    }

    XboxModel.updateOne({ url: req.body.url }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];


module.exports = {
  Microsoft,
  ListSurfacepro,
  Surfacepro,
  SurfaceproPOST,
  ListSurfacebook,
  Surfacebook,
  SurfacebookPOST,
  ListXbox,
  Xbox,
  XboxPOST
};
