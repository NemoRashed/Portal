const mongoose = require("mongoose");

const conn = mongoose.createConnection(process.env.MONGODB_URI, {
  dbName: "database",
});

// Samsung

conn.model(
  "listgalaxynote",
  require("../schemas/samsung/oldlistgalaxynote"),
  "listgalaxynote"
);
conn.model(
  "listgalaxynotetransfer",
  require("../schemas/samsung/listgalaxynote"),
  "listgalaxynotetransfer"
);

module.exports = conn;
