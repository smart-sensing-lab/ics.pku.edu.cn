var User = require('../../models/user.js');
var debug = require('debug')('ec:default');

exports.get = function(req, done, fail){
    var title = '北京大学智能计算与感知实验室';
    //if(this.title){
      //  title = this.title + '-' + title;
    //}
    done({ title });
};
