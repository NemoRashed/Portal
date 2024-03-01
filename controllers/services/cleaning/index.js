const { body, validationResult } = require("express-validator");

const cleaningDbConnection = require("../../../models/connections/cleaning");
const CleaningModel = cleaningDbConnection.model("cleaning");

const Home = function (req, res, next) {
  CleaningModel.find({ name: "Cleaning" })
    .then((result) => {
      const Info = [];
      let person = result[0].types;
      for (let x in person) {
        Info.push(person[x]);
      }
      res.render("services/cleaning/index", {
        title: "Cleaning",
        user: req.user,
        cleaning: result[0],
        types: Info,
      });
    })
    .catch((err) => res.send(err));
};


const POST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/cleaning";

    const update = {
      [`types.${req.body.key}.price`]: req.body.price,
      [`types.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Cleaning",
        user: req.user,
        alert,
      });
    }

    CleaningModel.updateOne({ name: "Cleaning" }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];



module.exports = {
  Home,
  POST
};
