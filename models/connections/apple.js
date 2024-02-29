const mongoose = require("mongoose");

const conn = mongoose.createConnection(process.env.MONGODB_URI, {dbName: 'apple'});
conn.model("listapple", require("../schemas/apple/listapple"), "listapple");

conn.model("listiphone", require("../schemas/apple/listiphone"), "listiphone");
conn.model("iphone", require("../schemas/apple/iphone"), "iphone");

conn.model("listipad", require("../schemas/apple/listipad"), "listipad");
conn.model("ipad", require("../schemas/apple/ipad"), "ipad");

conn.model("listwatch", require("../schemas/apple/listwatch"), "listwatch");
conn.model("watch", require("../schemas/apple/watch"), "watch");

module.exports = conn;
