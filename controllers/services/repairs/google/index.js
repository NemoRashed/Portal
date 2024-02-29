const { body, validationResult } = require("express-validator");

const googleDbConnection = require("../../../../models/connections/google");
const GoogleModel = googleDbConnection.model("listgoogle");
const ListPixelModel = googleDbConnection.model("listpixel");
const PixelModel = googleDbConnection.model("pixel");

// Google
//-----------------

const Google = function (req, res, next) {
  GoogleModel.find()
    .then((result) => {
      res.render("services/repairs/google/index", {
        title: "Google",
        user: req.user,
        googles: result,
      });
    })
    .catch((err) => res.send(err));
};

const PixelSeries = function (req, res, next) {
  ListPixelModel.find()
    .then((result) => {
      res.render("services/repairs/google/pixel/index", {
        title: "Google Pixel Series",
        user: req.user,
        pixels: result,
      });
    })
    .catch((err) => res.send(err));
};

const Pixel = function (req, res, next) {
  PixelModel.find({ url: req.params.pix })
    .then((result) => {
      const phoneInfo = [];
      let person = result[0].repairs;

      for (let x in person) {
        phoneInfo.push(person[x]);
      }
     
      res.render("services/repairs/google/pixel/[id]", {
        title: req.params.pix,
        user: req.user,
        pixel: result[0],
        repairs: phoneInfo,
      });
    })
    .catch((err) => res.send(err));
};

const PixelPOST = [
  body("price", "Empty price").trim().isLength({ min: 1 }).escape(),
  body("time", "Empty time").trim().isLength({ min: 1 }).escape(),
  function (req, res, next) {
    let link = "/services/repairs/google/pixel/" + req.body.url;
    const update = {
      [`repairs.${req.body.key}.price`]: req.body.price,
      [`repairs.${req.body.key}.time`]: req.body.time,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const alert = errors.array();
      res.render(link, {
        title: "Pixels",
        user: req.user,
        phone: result[0],
        alert,
      });
    }

    PixelModel.updateOne({ url: req.body.url }, update)
      .then((result) => console.log(result))
      .catch((err) => next(err));

    res.redirect(link);
  },
];

module.exports = {
  Google,
  PixelSeries,
  Pixel,
  PixelPOST,
};
