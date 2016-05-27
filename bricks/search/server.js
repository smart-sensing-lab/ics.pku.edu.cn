exports.url = '/search';
exports.get = function(req, done, fail) {
    done({
        searchActive:'active'
    });
};  