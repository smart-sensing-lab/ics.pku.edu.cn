var article = require('../../models/article');

exports.view = function(req, done, fail){
    done({
        list1: article.random(4),
        list2: article.random(4)
    });
};

