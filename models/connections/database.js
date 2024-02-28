const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI4);

conn.model('ipad', require('../schemas/ipad'),'ipad');
conn.model('ipadtransfer', require('../schemas/ipad'),'ipadtransfer');

conn.model('iphone', require('../schemas/iphone'),'iphone');
conn.model('iphonetransfer', require('../schemas/iphone'),'iphonetransfer');

conn.model('watch', require('../schemas/watch'),'watch');
conn.model('watchtransfer', require('../schemas/watch'),'watchtransfer');

conn.model('listwatch', require('../schemas/listwatch'),'listwatch');
conn.model('listwatchtransfer', require('../schemas/listwatch2'),'listwatchtransfer');


conn.model('console', require('../schemas/sony/console'),'console');
conn.model('consoletransfer', require('../schemas/sony/console'),'consoletransfer');

module.exports = conn;

