var Carousel = require('../../models/carousel');

exports.get = function(req, done, fail){
    done({
        carousels: Carousel.random(3)
    });
};

