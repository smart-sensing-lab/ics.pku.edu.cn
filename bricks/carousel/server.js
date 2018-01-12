var Carousel = require('../../models/carousel');

exports.get = function(req, done, fail){
    done({
       // carousels: Carousel.random(8)

        carousels:[

            // {title: '2017年浙江大学网络空间安全青年科学家国际论坛',
            // content: '',
            // createdTime: Date.now(),
            // img: '/img/home/2017年浙江大学网络空间安全青年科学家国际论坛.png'},

            {title: '2017年实验室在王平教授带领下成绩斐然',
            content: '',
            createdTime: Date.now(),
            img: '/img/research/people-c.png'},

            {title: '祝贺实验室2013级博士研究生汪定获得2017年度“CCF优秀博士学位论文奖”',
            content: '',
            createdTime: Date.now(),
            img: '/img/wangding.jpg'},

            {title: '2018年人工智能8大趋势看点',
            content: '',
            createdTime: Date.now(),
            img: '/img/home/2018年人工智能8大趋势看点.png'},

            {title: '白硕：区块链上隐私与数据主权保护',
            content: '',
            createdTime: Date.now(),
            img: '/img/home/白硕：区块链上隐私与数据主权保护.png'},

            

            {title: '全球视角下的区块链和加密数字货币发展报告',
            content: '',
            createdTime: Date.now(),
            img: '/img/home/全球视角下的区块链和加密数字货币发展报告.png'},

            {title: '徐云峰：物联网与区块链的深度融合势在必行',
            content: '',
            createdTime: Date.now(),
            img: '/img/home/徐云峰：物联网与区块链的深度融合势在必行.png'},    
        ]
    });
};

