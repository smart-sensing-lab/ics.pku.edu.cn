exports.url = '/recruit';
exports.get = function(req, done, fail) {
    done({
        recruitActive:'active'
    });
};