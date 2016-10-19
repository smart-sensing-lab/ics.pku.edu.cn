exports.url = '/laboratory';
exports.get = function(req, done, fail) {
    done({
        laboratoryActive:'active'
    });
};