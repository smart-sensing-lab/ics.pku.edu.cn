const Article = require('../../models/article.js');
const debug = require('debug')('ics:admin-edit-article');

exports.url = ['/admin/create-article', '/admin/articles/:id/edit'];

var title = '添加文章';

exports.get = function(req, done, fail) {
    var id = req.params.id;

    if (id) {
        Article
            .findById(id)
            .execAsync()
            .then(article => done({ article, title }))
            .catch(fail);
    } 
    else done({ title });
};

exports.post = function(req, done, fail, res) {
    var article = new Article(req.body);
    article.creator = req.user.id;

    article.save()
        .then(x => res.redirect('/admin/articles'))
        .catch(fail);
};

exports.put = function(req, done, fail, res) {
    var id = req.params.id;

    Article
        .findByIdAndUpdate(id, req.body)
        .execAsync()
        .then(x => res.redirect(`/admin/articles/${id}/edit`))
        .catch(fail);
};
