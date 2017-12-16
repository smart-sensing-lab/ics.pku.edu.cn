const _ = require('lodash');
const debug = require('debug')('ics:cooperation');


exports.url = '/cooperation';
exports.get = function(req, done, fail) {
    done({
        research_cooperationActive:'active',
        researchActive:'active'
    });
};


