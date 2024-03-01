const { body, validationResult } = require("express-validator");

const diagnosticsDbConnection = require("../../../models/connections/diagnostics");
const DiagnosticModel = diagnosticsDbConnection.model("diagnostic");

const Home = function (req, res, next) {
  DiagnosticModel.find({ name: "Diagnostics" })
    .then((result) => {
      const Info = [];
      let person = result[0].types;
      for (let x in person) {
        Info.push(person[x]);
      }
      res.render("services/diagnostics/index", {
        title: "Diagnostics",
        user: req.user,
        diagnostic: result[0],
        types: Info,
      });
    })
    .catch((err) => res.send(err));
};


const POST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/diagnostics";

    const update = {
      [`types.${req.body.key}.price`]: req.body.price,
      [`types.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Diagnostics",
        user: req.user,
        alert,
      });
    }

    DiagnosticModel.updateOne({ name: "Diagnostics" }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];



module.exports = {
  Home,
  POST
};
