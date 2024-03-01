const { body, validationResult } = require("express-validator");

const unlocksDbConnection = require("../../../models/connections/unlocks");
const UnlockModel = unlocksDbConnection.model("unlock");

const Home = function (req, res, next) {
  UnlockModel.find({ name: "Unlocks" })
    .then((result) => {
      const Info = [];
      let person = result[0].types;
      for (let x in person) {
        Info.push(person[x]);
      }
      res.render("services/unlocks/index", {
        title: "Unlocks",
        user: req.user,
        unlock: result[0],
        types: Info,
      });
    })
    .catch((err) => res.send(err));
};


const POST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/unlocks";

    const update = {
      [`types.${req.body.key}.price`]: req.body.price,
      [`types.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Unlocks",
        user: req.user,
        alert,
      });
    }

    UnlockModel.updateOne({ name: "Unlocks" }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];



module.exports = {
  Home,
  POST
};
