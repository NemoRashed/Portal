const mongoose = require("mongoose");

const conn = mongoose.createConnection(process.env.MONGODB_URI, {
  dbName: "buybacks",
});

conn.model("buybacks", require("../schemas/buybacks"), "buybacks");

module.exports = conn;
