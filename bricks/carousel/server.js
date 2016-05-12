var article = require('../../models/article');

exports.view = function(req, done, fail){
    done({
        carousels: article.random(3)
    });
};

