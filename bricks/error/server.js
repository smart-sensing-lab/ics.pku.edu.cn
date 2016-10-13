var debug = require('debug')('ics:error');

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

    res.status(err.status || 500);

    done({
        message: err.message || err,
        stack: err.stack
    });
};
