const TransactionModel = require("../models/transaction");

// Transaction
const Home = function (req, res, next) {
  res.render("transaction", {
    title: "Transaction",
    user: req.user,
    transactions: {},
  });
};

const PostRecordController = [
  // body("customer", "Empty customer").trim().isLength({ min: 1 }).escape(),
  // body("device", "Empty device").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render("transaction", { title: "Transaction", alert });
    }
    // Setting up date
    const d = new Date(Date.parse(req.body.date));
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    req.body.date = month + "/" + day + "/" + year;
    // Settting up Customer
    //  req.body.customer = { name: req.body.customername, email: req.body.customeremail, phone: req.body.customerphonenumber };
    req.body.profit = req.body.total - req.body.part;
    const item = new TransactionModel(req.body)
      .save()
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect("/transaction");
  },
];

const PostFiltersController = function (req, res, next) {
  if (req.body.date == "") {
    if (req.body.location == "all") {
      TransactionModel.find()
        .then((result) => {
          res.render("transaction", {
            title: "Transaction",
            user: req.user,
            transactions: result,
          });
        })
        .catch((err) => res.send(err));
    } else {
      TransactionModel.find({ location: req.body.location })
        .then((result) => {
          res.render("transaction", {
            title: "Transaction",
            user: req.user,
            transactions: result,
          });
        })
        .catch((err) => res.send(err));
    }
  } else {
    // Setting up date
    const d = new Date(Date.parse(req.body.date));
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    req.body.date = month + "/" + day + "/" + year;

    TransactionModel.find({ location: req.body.location, date: req.body.date })
      .then((result) => {
        res.render("transaction", {
          title: "Transaction",
          user: req.user,
          transactions: result,
        });
      })
      .catch((err) => res.send(err));
  }
};

// Delete a transaction
const deleteTransaction = function (req, res, next) {
  const id = req.params.transaction;
  TransactionModel.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/transaction" }))
    .catch((err) => console.log(err));
};

module.exports = {
  Home,
  PostRecordController,
  deleteTransaction,
  PostFiltersController,
};
