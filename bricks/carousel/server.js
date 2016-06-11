var Carousel = require('../../models/carousel');

exports.get = function(req, done, fail){
    done({
       // carousels: Carousel.random(8)

        carousels:[{title: 't1',
            content: 'content1',
            createdTime: Date.now(),
            img: '/img/slide/1.jpg'},{title: 't2',
            content: 'content2',
            createdTime: Date.now(),
            img: '/img/slide/2.jpg'},{title: 't3',
            content: 'content3',
            createdTime: Date.now(),
            img: '/img/slide/3.jpg'}]
    });
};

