exports.url = '/laboratory-graduate';
exports.get = function(req, done, fail) {
    done({
        laboratoryActive:'active',
        laboratory_graduateActive:'active'
    });
};