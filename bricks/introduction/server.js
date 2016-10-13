exports.url = '/introduction';
exports.get = function(req, done, fail) {
    done({
        introductionActive:'active'
    });
};