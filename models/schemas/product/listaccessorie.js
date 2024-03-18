const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListAccessorieSchema = new Schema(
  {
    name: String,
    image: String,
    url: String,
    rank:String
  },
  { timestamps: false }
);

module.exports = ListAccessorieSchema;
