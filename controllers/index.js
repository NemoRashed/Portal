const UserModel = require("../models/user.js");
const TransactionModel = require("../models/transaction");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

// Home
const Home = function (req, res, next) {
  res.render("index", {
    title: "Home",
    user: req.user,
    style: "/stylesheets/index.css",
  });
};

// Sign Up
const signupGetController = function (req, res, next) {
  res.render("signup", { title: "Sign Up" });
};

const signUpPostController = [
  body("username", "Empty name").trim().isLength({ min: 1 }).escape(),
  body("password").isLength({ min: 1 }).escape(),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render("signup", { title: "Sign Up", alert });
    }

    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
      if (err) {
        next(err);
      }
      // Setting up Admin to be included
      let adminRights = "false";
      if (req.body.isAdmin === "lml") {
        adminRights = "true";
      }

      const item = new UserModel({
        username: req.body.username,
        password: hashedPassword,
        avatar: req.body.avatar,
        isAdmin: adminRights,
      })
        .save()
        .then((result) => console.log(result))
        .catch((err) => next(err));
    });
    res.redirect("/");
  },
];

// Login
const loginGetController = function (req, res, next) {
  res.render("login", { title: "Login" });
};

const loginPostController = [
  body("username", "Empty name").trim().isLength({ min: 1 }).escape(),
  body("password").isLength({ min: 1 }).escape(),
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureMessage: true,
  }),
];

// Log Out
const logOutController = (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

module.exports = {
  Home,
  signupGetController,
  signUpPostController,
  loginGetController,
  loginPostController,
  logOutController
};
