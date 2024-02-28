const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListRepairSchema = new Schema(
  {
    brand: String,
    image: String,
    url: String,
    rank:String
  },
  { timestamps: false }
);

module.exports = ListRepairSchema;





