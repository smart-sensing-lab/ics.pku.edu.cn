const fs = require('fs');
const path = require('path');
const marked = require('marked');
const _ = require('lodash');
const debug = require('debug')('ec:home');

exports.view = function(req, done, fail) {
    done({
        navs
    });
};

var navs = [{
    title: '订单中心',
    navs: [{
        title: '我的订单',
        href: '/home/orders'
    }, {
        title: '评价晒单',
        href: '/home/comments'
    }]
}, {
    title: '个人中心',
    navs: [{
        title: '我的个人中心',
        href: '/home/mine'
    }, {
        title: '现金账户',
        href: '/home/cash'
    }, {
        title: '我的积分',
        href: '/home/credits'
    }, {
        title: '优惠券',
        href: '/home/coupon'
    }, {
        title: '收货地址',
        href: '/home/address'
    }, {
        title: '发票管理',
        href: '/home/receipt'
    }]
}, {
    title: '素材中心',
    navs: [{
        title: '我的印刷pdf',
        href: '/home/pdf'
    }, {
        title: '我的名片模板',
        href: '/home/cards'
    }, {
        title: '我的设计文件',
        href: '/home/designs'
    }, {
        title: '我的文件资料',
        href: '/home/files'
    }]
}, {
    title: '售后服务',
    navs: [{
        title: '退货订单',
        href: '/home/returns'
    }, {
        title: '换货订单',
        href: '/home/exchanges'
    }, {
        title: '我的客户经理',
        href: '/home/manager'
    }]
}, {
    title: '账户管理',
    navs: [{
        title: '账号安全',
        href: '/home/safety'
    }, {
        title: '个人信息维护',
        href: '/home/info'
    }]
}, {
    title: '消息中心',
    navs: [{
        title: '系统消息 <span class="badge badge-primary">5</span>',
        href: '/home/message'
    }]
}];

