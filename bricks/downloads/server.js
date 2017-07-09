const _ = require('lodash');
const debug = require('debug')('ics:downloads');
const File = require('../../models/file.js');

exports.url = '/downloads';


exports.get = function(req, done, fail) {
    if(!req.user) return fail(401);
    // find筛选
    File.find()
        //.populate('creator')
        .execAsync()
        .then(files => {
            done({
                downloadsActive: 'active',
                downloads_openActive:'active',
                title: '资源下载',
                files: files
            });
        })
        .catch(fail);
    
};