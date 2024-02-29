const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGODB_URI4);


// Google 

 conn.model('pixel', require('../schemas/google/pixel'),'pixel');
 conn.model('pixeltransfer', require('../schemas/google/pixel'),'pixeltransfer');

module.exports = conn;

