const { body, validationResult } = require("express-validator");
// const ServicesModel = require("../models/services");

const serviceDbConnection = require('../models/connections/service');
const ServicesModel = serviceDbConnection.model('listservice');


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

/*
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
*/

/*
const Create = [
  // body("customer", "Empty customer").trim().isLength({ min: 1 }).escape(),
  // body("device", "Empty device").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render("services", { title: "Services", alert });
    }
    
    const item = new ServicesModel(req.body)
      .save()
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect("/services");
  },
];
*/
module.exports = {
  Home,
 // Repairs
};
