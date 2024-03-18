const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListProductSchema = new Schema(
  {
    name: String,
    image: String,
    url: String,
    rank:String
  },
  { timestamps: false }
);

module.exports = ListProductSchema;
