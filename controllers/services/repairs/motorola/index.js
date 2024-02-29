// Motorola
//-----------------

const Home = function (req, res, next) {
  res.render("services/repairs/motorola/index", {
    title: "Motorola",
    user: req.user,
  });
};

module.exports = {
  Home,
};
