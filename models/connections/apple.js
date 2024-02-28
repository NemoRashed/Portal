const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI3);
conn.model('listapple', require('../schemas/listapple'),'listapple');

conn.model('listiphone', require('../schemas/listiphone'),'listiphone');
conn.model('iphone', require('../schemas/iphone'),'iphone');

conn.model('listipad', require('../schemas/listipad'),'listipad');
conn.model('ipad', require('../schemas/ipad'),'ipad');

conn.model('listwatch', require('../schemas/listwatch'),'listwatch');
conn.model('watch', require('../schemas/watch'),'watch');

module.exports = conn;

// {dbName: 'apple'}