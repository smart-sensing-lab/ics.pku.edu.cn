var _ = require('lodash');
var loremIpsum = require('lorem-ipsum');
var mongoose = require('mongoose');

var ArticleSchema = mongoose.Schema({
    title: String,
    excerpt: String,
    content: String,
    date: Date,
    img: String
});

ArticleSchema.statics.random = function(n) {
    return n ? _.times(n, random) : random();
};

function random() {
    return {
        id: '14321',
        title: loremIpsum({
            count: 7,
            units: 'words'
        }),
        excerpt: loremIpsum({
            count: 13,
            units: 'words'
        }),
        content: loremIpsum({
            count: 10
        }),
        date: new Date(),
        img: '/img/slide/' + _.random(1, 3) + '.jpg'
    };
}

module.exports = mongoose.model('Article', ArticleSchema);
