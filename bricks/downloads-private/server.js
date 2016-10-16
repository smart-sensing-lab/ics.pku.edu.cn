const _ = require('lodash');
const debug = require('debug')('ics:downloads');
const File = require('../../models/file.js');

exports.url = '/downloads-private';


exports.get = function(req, done, fail) {
    if(!req.user) return fail(401);
    // find进行筛选
    File.find()
    //.populate('creator')
        .execAsync()
        .then(files => {
            done({
                downloadsActive: 'active',
                downloads_privateActive:'active',
                title: '资源下载',
                files: files
            });
        })
        .catch(fail);
};