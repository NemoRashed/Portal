const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSamsungSchema = new Schema(
  {
    category: String,
    image: String,
    url: String,
  },
  { timestamps: false }
);

module.exports = ListSamsungSchema;