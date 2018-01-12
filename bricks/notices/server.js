var Article = require('../../models/article.js');
var debug = require('debug')('ics:notices-list');//debug输出  require是函数，('ics:news-list')是参数，log输出的时候会带上这个标记

exports.url = '/notices';

exports.get = function(req, done, fail) {
    Article

        .find({
            type: 'notice'
        })
        .sort('-createdTime')
        .paginate({
            perPage: 10,
            page: req.query.page || 1
        }, function(err, pager) {
            if (err) return fail(err);
            //debug(pager);
            done({
                noticesActive: 'active',
                pager: pager,
                title: '通知公告',
            });
        });



    //See: https://www.npmjs.com/package/mongoose-query-paginate
    /* pager = {
     options: options,               // paginate options
     results: [Document, ...],       // mongoose results
     current: 5,                     // current page number
     last: 12,                       // last page number
     prev: 4,                        // prev number or null
     next: 6,                        // next number or null
     pages: [ 2, 3, 4, 5, 6, 7, 8 ], // page numbers
     count: 125                      // document count
     };*/
};
