var _ = require('lodash');
var loremIpsum = require('lorem-ipsum');
var mongoose = require('mongoose');

var CarouselSchema = mongoose.Schema({
    title: String,
    content: String,
    createdTime: Date,
    img: String
});

CarouselSchema.statics.random = function(n) {
    return n ? _.times(n, random) : random();
};

function random() {
    return {
        id: '14321',
        title: loremIpsum({
            count: 7,
            units: 'words'
        }),
        content: loremIpsum({
            count: 13,
            units: 'words'
        }),
        date: new Date(),
        img: '/img/slide/' + _.random(1, 3) + '.jpg'
    };
}

module.exports = mongoose.model('Carousel', CarouselSchema);
