var express = require("express");
var router = express.Router();
var Controllers = require("../controllers/index.js");
let transactionControllers = require("../controllers/transaction.js");
let servicesControllers = require("../controllers/services.js");
let formsController = require("../controllers/forms.js");
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

// Transaction
router.get("/transaction", transactionControllers.Home);
router.post("/transaction", transactionControllers.RecordController);
router.get("/transactionsearch", transactionControllers.SearchController);
router.delete("/delete/:transaction", transactionControllers.deleteTransaction);
/*
// Jot Form Customer Release Forms 
router.get('/forms', formsController.Home);
router.get('/forms/general', formsController.General);
router.post('/forms/general', formsController.General);
*/

// Services
router.get('/services', servicesControllers.Home);
router.get('/services/repairs', servicesControllers.Repairs);

// router.post('/services', servicesControllers.Create);

module.exports = router;
