const serviceDbConnection = require("../../models/connections/service");
const ServicesModel = serviceDbConnection.model("listservice");

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


module.exports = {
  Home,
};
