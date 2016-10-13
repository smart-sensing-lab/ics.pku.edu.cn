var Article = require('../../models/article.js');
var debug = require('debug')('ics:news-list');

exports.url = ['/news/:id', '/notices/:id'];//新闻和公告的内容都会所引到这里来

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
