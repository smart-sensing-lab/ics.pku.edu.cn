exports.url = '/cooperation';
exports.get = function(req, done, fail) {
    done({
        cooperationActive:'active'
    });
};