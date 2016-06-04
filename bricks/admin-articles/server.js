const _ = require('lodash');
const debug = require('debug')('ics:help');
const Article = require('../../models/article.js');

exports.url = ['/admin/articles', '/admin'];

exports.get = function(req, done, fail) {
    if(!req.user) return fail(401);

    Article.find()
        .populate('creator')
        .execAsync()    //执行上面的两步操作
        .then(articles => {     //把上面的结果进行回调到articles里面
            done({
                articleActive: 'active',
                title: '文章管理',
                articles: articles  //把上面articles里面的值给左边的标识符
            });
        })
        .catch(fail);
};
