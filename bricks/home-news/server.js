const Article = require('../../models/article');
const _ = require('lodash');

exports.get = function(req, done, fail) {
    Article
        .find({
            type: 'news'
        })
        .sort('-createdTime')
        .limit(14)
        .execAsync()
        .then(news => done({
            list1: _.slice(news, 6, 10),
            list2: _.slice(news, 10, 14)
        }))
        .catch(fail);
};
