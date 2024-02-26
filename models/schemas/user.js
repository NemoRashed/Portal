const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema(
  {
    username: String,
    password: String,
    avatar: String,
    isAdmin: String,
  },
  { timestamps: true }
);

module.exports = userSchema;

