const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI2);
conn.model('listservice', require('../schemas/listservice'),'listservice');

module.exports = conn;

