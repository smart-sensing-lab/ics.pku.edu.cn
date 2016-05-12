var debug = require('debug')('www:error');

exports.view = function(req, done, fail){
    var err = this.context.error;
    if(err.status === '404') return res.end('404');
    debug(err);
    done({
        message: err.message || err,
        stack: err.stack
    });
};
