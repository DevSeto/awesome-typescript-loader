const config = require('./config/index');
module.exports = require('./config/webpack/' + config.get('NODE_ENV'));
