const mongoose = require("mongoose");

const conn = mongoose.createConnection(process.env.MONGODB_URI, {
  dbName: "software",
});

conn.model(
  "listsoftware",
  require("../schemas/software/listsoftware"),
  "listsoftware"
);

conn.model(
  "datarecovery",
  require("../schemas/software/datarecovery"),
  "datarecovery"
);
conn.model(
  "osinstallations",
  require("../schemas/software/osinstallations"),
  "osinstallations"
);
conn.model(
  "troubleshooting",
  require("../schemas/software/troubleshooting"),
  "troubleshooting"
);
conn.model(
  "virusandmalwareremoval",
  require("../schemas/software/virusandmalwareremoval"),
  "virusandmalwareremoval"
);

module.exports = conn;
