const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListPhoneSchema = new Schema(
  {
    series: String,
    image: String,
    url: String,
    rank:Number
  },
  { timestamps: false }
);

module.exports = ListPhoneSchema;
