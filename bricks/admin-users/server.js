const _ = require('lodash');
const debug = require('debug')('ics:admin-user');
const User = require('../../models/user.js');

exports.url = '/admin/users';


exports.get = function(req, done, fail) {
    if(!req.user) return fail(401);
    User.find()
        //.populate('creator')
        .execAsync()
        .then(users => {
        done({
            userActive: 'active',
            title: '管理员管理',
            users: users
        });
})
    .catch(fail);
};






