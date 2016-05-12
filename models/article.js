var _ = require('lodash');
var loremIpsum = require('lorem-ipsum');

var titles = [
    "北京大学代表团赴英德访问",
    '燕园变形，劳动光荣——记在食堂工作的一天',
    '北京大学参与组织举办的国际生物地理学会年会在北京召开',
    '首届PKU-NUS数量金融与经济学国际学术会议在深圳举办',
    '北京大学举行第四轮学科评估动员与工作布置会',
    '北京大学首届化石文化周活动举行',
    '北京大学人民医院举行5•12国际护士节庆祝大会',
    '物理学院吕劲课题组及其合作者在Progress in Materials Science上发表硅烯长篇综述'
];

function random() {
    return {
        id: '14321',
        title: _.sample(titles),
        excerpt: loremIpsum({count: 13, units: 'words'}),
        content: loremIpsum({count: 10}),
        date: new Date(),
        img: '/img/slide/' + _.random(1, 3) + '.jpg'
    };
}

exports.random = function(n) {
    return n ? _.times(n, random) : random();
};
