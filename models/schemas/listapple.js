const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListAppleSchema = new Schema(
  {
    category: String,
    image: String,
    url: String,
  },
  { timestamps: false }
);

module.exports = ListAppleSchema;





