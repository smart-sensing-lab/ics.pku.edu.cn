exports.url = '/notices';
exports.get = function(req, done, fail) {
    done({
        noticesActive:'active'
    });
};  