var express = require("express");
var router = express.Router();
var Controllers = require("../controllers/index.js");
let transactionControllers = require("../controllers/transaction.js");
let servicesControllers = require("../controllers/services.js");
let formsController = require("../controllers/forms.js");
let databaseControllers = require("../controllers/database.js");

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

// DataBase Changes 
router.get("/database", databaseControllers.Home);
router.get("/database/transfercollections", databaseControllers.TransferCollections);
router.get("/database/updatecollections", databaseControllers.UpdateCollections);
router.get("/database/newcollections", databaseControllers.NewCollections);
router.get("/database/changeurlandsrc", databaseControllers.ChangeURLANDSRC);

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
router.get('/services/repairs/apple', servicesControllers.Apple);
// iIphones 
router.get('/services/repairs/apple/iphone', servicesControllers.IphoneSeries);
router.get('/services/repairs/apple/iphone/:phone', servicesControllers.Iphone);
router.post('/services/repairs/apple/iphone/:phone', servicesControllers.IphonePOST);

//Ipad
router.get('/services/repairs/apple/ipad', servicesControllers.IpadSeries);
router.get('/services/repairs/apple/ipad/:pad', servicesControllers.Ipad);
router.post('/services/repairs/apple/ipad/:pad', servicesControllers.IpadPOST);

//Apple Watch 
router.get('/services/repairs/apple/watch', servicesControllers.WatchSeries);
router.get('/services/repairs/apple/watch/:wat', servicesControllers.Watch);
router.post('/services/repairs/apple/watch/:wat', servicesControllers.WatchPOST);

//Macbook
router.get('/services/repairs/apple/macbook', servicesControllers.Macbook);

module.exports = router;
