const mongoose = require("mongoose");

const conn = mongoose.createConnection(process.env.MONGODB_URI, {
  dbName: "price",
});

conn.model("iphone", require("../schemas/apple/iphone"), "iphone");

conn.model("ipad", require("../schemas/apple/ipad"), "ipad");

conn.model("watch", require("../schemas/apple/watch"), "watch");

module.exports = conn;
