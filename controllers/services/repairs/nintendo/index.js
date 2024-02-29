const { body, validationResult } = require("express-validator");

const nintendoDbConnection = require("../../../../models/connections/nintendo");
const NintendoModel = nintendoDbConnection.model("listnintendo");
const ListConsoleModel = nintendoDbConnection.model("listconsole");
const ConsoleModel = nintendoDbConnection.model("console");

// Nintendo
//-----------------

const Nintendo = function (req, res, next) {
  NintendoModel.find()
    .then((result) => {
      res.render("services/repairs/nintendo/index", {
        title: "Nintendo",
        user: req.user,
        nintendos: result,
      });
    })
    .catch((err) => res.send(err));
};

const ConsoleSeries = function (req, res, next) {
  ListConsoleModel.find()
    .then((result) => {
      res.render("services/repairs/nintendo/consoles/index", {
        title: "Nintendo Console Series",
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
     
      res.render("services/repairs/nintendo/consoles/[id]", {
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
    let link = "/services/repairs/nintendo/consoles/" + req.body.url;
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
  Nintendo,
  ConsoleSeries,
  Console,
  ConsolePOST,
};
