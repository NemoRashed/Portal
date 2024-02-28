var express = require("express");
var router = express.Router();
let transactionControllers = require("../controllers/transaction.js");

// Transaction
router.get("/transaction", transactionControllers.Home);
router.post("/transaction", transactionControllers.RecordController);
router.get("/transactionsearch", transactionControllers.SearchController);
router.delete("/delete/:transaction", transactionControllers.deleteTransaction);

module.exports = router;
