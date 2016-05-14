var mongoose = require('mongoose');
var config = require('./config.json');
var debug = require('debug')('ics:db');
var db = mongoose.connection;
var User = require('./models/user');
var config = ('./config.json');
var BPromise = require('bluebird');
BPromise.promisifyAll(mongoose);

db.on('error', e => {
    debug('connect error: ', e);
});
db.once('open', function() {
    debug('connected');

    BPromise
        .resolve(config.admin || [])
        .map(user => User.registerAsync(new User({
            username: user.username
        }), user.password))
        .then(res => debug(`${res.length} users registered`))
        .catch(e => debug.bind(debug, 'user register error'));
});

if (config.mongodb) {
    mongoose.connect(config.mongodb);
}

module.exports = db;
