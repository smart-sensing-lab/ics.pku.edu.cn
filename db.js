var mongoose = require('mongoose');
var config = require('./config.json');
var debug = require('debug')('ics:db');
var db = mongoose.connection;
var User = require('./models/user');
var config = require('./config.json');
var _ = require('lodash');
var BPromise = require('bluebird');
BPromise.promisifyAll(mongoose);
require('mongoose-query-paginate');

db.on('error', e => {
    debug('connect error: ', e);
});
db.once('open', function() {
    debug('connected');
});

if (config.mongodb) {
    mongoose.connect(config.mongodb);
} else {
    debug('config:mongodb not set');
}

module.exports = db;
