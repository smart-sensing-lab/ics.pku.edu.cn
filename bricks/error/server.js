var debug = require('debug')('www:error');

exports.get = function(req, done, fail, res){
    var err = this.error;
    switch(err.status){
        case 301:
        case 303:
            return res.redirect(err.status, err.message);
        case 401:
            return res.redirect(303, '/login?next=' + req.originalUrl);
        case 500:
            debug(err);
            break;
        default:
            break;
    } 
    done({
        message: err.message || err,
        stack: err.stack
    });
};
