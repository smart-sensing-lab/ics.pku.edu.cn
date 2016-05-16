var Article = require('../../models/article.js');
var debug = require('debug')('ics:news-list');

exports.url = '/news/:id';

exports.get = function(req, done, fail) {
    Article
        .findById(req.params.id)
        .execAsync()
        .then(article => {
            done({
                title: article.title,
                article: article
            });
        });
};
