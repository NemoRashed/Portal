const { body, validationResult } = require("express-validator");

const buybacksDbConnection = require("../../../models/connections/buybacks");
const BuybacksModel = buybacksDbConnection.model("buybacks");

const Home = function (req, res, next) {
  BuybacksModel.find({ name: "Buybacks" })
    .then((result) => {
      const Info = [];
      let person = result[0].types;
      for (let x in person) {
        Info.push(person[x]);
      }
      res.render("services/buybacks/index", {
        title: "Buybacks",
        user: req.user,
        buyback: result[0],
        types: Info,
      });
    })
    .catch((err) => res.send(err));
};


const POST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/buybacks";

    const update = {
      [`types.${req.body.key}.price`]: req.body.price,
      [`types.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Buybacks",
        user: req.user,
        alert,
      });
    }

    BuybacksModel.updateOne({ name: "Buybacks" }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];



module.exports = {
  Home,
  POST
};
