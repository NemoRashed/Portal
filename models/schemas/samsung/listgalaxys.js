const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListGalaxysSchema = new Schema(
  {
    series: String,
    image: String,
    url: String,
    rank: Number
  },
  { timestamps: false }
);

module.exports = ListGalaxysSchema;



