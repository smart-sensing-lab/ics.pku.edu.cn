var article = require('../../models/article');

exports.view = function(req, done, fail){
    done({
        notices: article.random(10)
    });
};

