const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI,{dbName: 'nintendo'});

conn.model('listnintendo', require('../schemas/nintendo/listnintendo'),'listnintendo');

conn.model('listconsole', require('../schemas/nintendo/listconsole'),'listconsole');
conn.model('console', require('../schemas/nintendo/console'),'console');

module.exports = conn;

