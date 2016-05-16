const Article = require('../../models/article');
const _ = require('lodash');

exports.get = function(req, done, fail) {
    Article
        .find({
            type: 'notice'
        })
        .sort('-createdTime')
        .limit(10)
        .execAsync()
        .then(notices => done({
            notices
        }))
        .catch(fail);
};
