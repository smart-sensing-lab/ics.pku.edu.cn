const Article = require('../../models/article');
const _ = require('lodash');

exports.get = function(req, done, fail) {
    Article
        .find({
            type: 'news'
        })
        .sort('-createdTime')
        .limit(8)
        .execAsync()
        .then(news => done({
            list1: _.slice(news, 0, 6),
            // list2: _.slice(news, 4, 8)
        }))
        .catch(fail);
};
