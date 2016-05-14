var User = require('../../models/user.js');
var debug = require('debug')('ec:default');

exports.view = function(req, done, fail){
    done({
        title: this.context.title || '北京大学智能计算与感知实验室'
    });
};
