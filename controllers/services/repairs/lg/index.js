const { body, validationResult } = require("express-validator");

const lgDbConnection = require("../../../../models/connections/lg");
const LGModel = lgDbConnection.model("listlg");
const ListPhoneModel = lgDbConnection.model("listphone");
const PhoneModel = lgDbConnection.model("phone");

// LG
//-----------------

const LG = function (req, res, next) {
  LGModel.find()
    .then((result) => {
      res.render("services/repairs/lg/index", {
        title: "LG",
        user: req.user,
        lgs: result,
      });
    })
    .catch((err) => res.send(err));
};

const PhoneSeries = function (req, res, next) {
  ListPhoneModel.find()
    .then((result) => {
      res.render("services/repairs/lg/phones/index", {
        title: "LG Phone Series",
        user: req.user,
        phones: result,
      });
    })
    .catch((err) => res.send(err));
};

const Phone = function (req, res, next) {
  PhoneModel.find({ url: req.params.phon })
    .then((result) => {
      const phoneInfo = [];
      let person = result[0].repairs;

      for (let x in person) {
        phoneInfo.push(person[x]);
      }
     
      res.render("services/repairs/lg/phones/[id]", {
        title: req.params.phon,
        user: req.user,
        phone: result[0],
        repairs: phoneInfo,
      });
    })
    .catch((err) => res.send(err));
};

const PhonePOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/repairs/lg/phones/" + req.body.url;
    const update = {
      [`repairs.${req.body.key}.price`]: req.body.price,
      [`repairs.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Phones",
        user: req.user,
        phone: result[0],
        alert,
      });
    }

    PhoneModel.updateOne({ url: req.body.url }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];

module.exports = {
  LG,
  PhoneSeries,
  Phone,
  PhonePOST,
};
