const _ = require('lodash');
const debug = require('debug')('ics:help');
const Article = require('../../models/article.js');

exports.url = ['/admin/articles', '/admin'];

exports.get = function(req, done, fail) {
    if(!req.user) return fail(401);

    Article.find()
        .populate('creator')
        .execAsync()
        .then(articles => {
            done({
                articleActive: 'active',
                title: '文章管理',
                articles: articles
            });
        })
        .catch(fail);
};
