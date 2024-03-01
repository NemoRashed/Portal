const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI,{dbName: 'diagnostics'});

conn.model('diagnostic', require('../schemas/diagnostics'),'diagnostic');

module.exports = conn;

