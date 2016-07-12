var Carousel = require('../../models/carousel');

exports.get = function(req, done, fail){
    done({
       // carousels: Carousel.random(8)

        carousels:[{title: '求学于博雅塔下',
            content: '',
            createdTime: Date.now(),
            img: '/img/home/home-big-1.jpg'},{title: '漫步在未名湖畔',
            content: '',
            createdTime: Date.now(),
            img: '/img/home/home-big-2.jpg'},{title: '潜心于理科楼中',
            content: '',
            createdTime: Date.now(),
            img: '/img/home/home-big-3.jpg'}]
    });
};

