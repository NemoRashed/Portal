var express = require("express");
var router = express.Router();

var Controllers = require("../controllers/index.js");

// Home
router.get("/", Controllers.Home);

// Sign Up
router.get("/signup", Controllers.signupGetController);
router.post("/signup", Controllers.signUpPostController);

// Login
router.get("/login", Controllers.loginGetController);
router.post("/login", Controllers.loginPostController);

// LogOut
router.get("/logout", Controllers.logOutController);

module.exports = router;
