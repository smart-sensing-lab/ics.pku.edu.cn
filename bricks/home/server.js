var User = require('../../models/user.js');
var debug = require('debug')('www:home');

exports.url = ['/', '/home'];
exports.get = function(req, done, fail){
    done({
        imgEntries: [{
            title: '师资<hr/>队伍',
            icon: 'fa-graduation-cap',
            img: '/img/teachers.jpg'
        },{
            title: '科研<hr/>成果',
            icon: 'fa-flask',
            img: '/img/research.jpg'
        }]
    });
};
