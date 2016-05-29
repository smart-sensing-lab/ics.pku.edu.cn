exports.url = '/downloads';
exports.get = function(req, done, fail) {
    done({
        downloadsActive:'active'
    });
};  