exports.url = '/training';
exports.get = function(req, done, fail) {
    done({
        trainingActive:'active'
    });
};