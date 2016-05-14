const _ = require('lodash');
const debug = require('debug')('ics:help');
const article = require('../../models/article.js');

exports.url = ['/admin/article', '/admin'];

exports.view = function(req, done, fail) {
    var title = '文章管理';
    done({
        articleActive: 'active',
        title
    });
};
