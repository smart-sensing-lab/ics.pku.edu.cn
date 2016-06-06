const _ = require('lodash');
const debug = require('debug')('ics:admin-files');
const File = require('../../models/file.js');

exports.url = '/admin/files';


exports.get = function(req, done, fail) {
    if(!req.user) return fail(401);
    File.find()
        .populate('creator')
        .execAsync()
        .then(files => {
        done({
            fileActive: 'active',
            title: '文件管理',
            files: files
        });
})
    .catch(fail);
};







