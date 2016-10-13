var mongoose = require('mongoose');
var config = require('../config.json');
var db = mongoose.connection;
var User = require('../models/user');
var _ = require('lodash');
var BPromise = require('bluebird');
var process = require('process');
BPromise.promisifyAll(mongoose);
BPromise.promisifyAll(User);

db.on('error', e => {
    console.log('connect error: ', e);
});
db.once('open', function() {
    console.log('connected');

    var admins = config.admin || [];

    User.removeAsync({})
        .then(x => BPromise.all(admins))
        .map(user => User.registerAsync(
            new User(_.omit(user, 'password')),
            user.password))
        .then(function() {
            console.log(`${admins.length} users registered`);
        })
        .catch(function(err) {
            console.log(`user register error: ${err}`);
        })
        .then(function(){
            db.close();
        });
});

if (config.mongodb) {
    console.log(`connnecting ${config.mongodb}...`);
    mongoose.connect(config.mongodb);
} else {
    console.log('config:mongodb not set');
}

