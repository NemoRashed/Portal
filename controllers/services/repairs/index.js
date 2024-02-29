const serviceDbConnection = require("../../../models/connections/service");
const RepairsModel = serviceDbConnection.model("listrepair");

const Home = function (req, res, next) {
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

module.exports = {
  Home
};
