const { body, validationResult } = require("express-validator");

const customizationDbConnection = require("../../../models/connections/customization");
const CustomModel = customizationDbConnection.model("custom");

const Home = function (req, res, next) {
  CustomModel.find({ name: "Customization" })
    .then((result) => {
      const Info = [];
      let person = result[0].types;
      for (let x in person) {
        Info.push(person[x]);
      }
      res.render("services/customization/index", {
        title: "Customization",
        user: req.user,
        custom: result[0],
        types: Info,
      });
    })
    .catch((err) => res.send(err));
};


const POST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/customization";

    const update = {
      [`types.${req.body.key}.price`]: req.body.price,
      [`types.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Customization",
        user: req.user,
        alert,
      });
    }

    CustomModel.updateOne({ name: "Customization" }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];



module.exports = {
  Home,
  POST
};
