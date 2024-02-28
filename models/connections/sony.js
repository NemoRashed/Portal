const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI5,{dbName: 'sony'});
conn.model('listsony', require('../schemas/sony/listsony'),'listsony');

conn.model('listconsole', require('../schemas/sony/listconsole'),'listconsole');
conn.model('console', require('../schemas/sony/console'),'console');

module.exports = conn;

