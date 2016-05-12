const _ = require('lodash');
const debug = require('debug')('www:help');
const article = require('../../models/article.js');

exports.url = '/admin/notices';

exports.view = function(req, done, fail) {
    var title = '通知管理';
    done({
        href: exports.url,
        title
    });
};
