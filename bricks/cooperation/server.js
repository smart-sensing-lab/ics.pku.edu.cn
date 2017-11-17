const _ = require('lodash');
const debug = require('debug')('ics:cooperation');


exports.url = '/cooperation';
exports.get = function(req, done, fail) {
    done({
        cooperationActive:'active'
    });
};


