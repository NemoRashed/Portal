const mongoose = require("mongoose");

const conn = mongoose.createConnection(process.env.MONGODB_URI, {
  dbName: "microsoft",
});

conn.model(
  "listmicrosoft",
  require("../schemas/microsoft/listmicrosoft"),
  "listmicrosoft"
);

conn.model(
  "listsurfacepro",
  require("../schemas/microsoft/listsurfacepro"),
  "listsurfacepro"
);
conn.model(
  "surfacepro",
  require("../schemas/microsoft/surfacepro"),
  "surfacepro"
);

conn.model(
  "listsurfacebook",
  require("../schemas/microsoft/listsurfacebook"),
  "listsurfacebook"
);
conn.model(
  "surfacebook",
  require("../schemas/microsoft/surfacebook"),
  "surfacebook"
);

conn.model("listxbox", require("../schemas/microsoft/listxbox"), "listxbox");
conn.model("xbox", require("../schemas/microsoft/xbox"), "xbox");

module.exports = conn;
