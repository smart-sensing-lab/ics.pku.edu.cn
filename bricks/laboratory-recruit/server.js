exports.url = '/laboratory-recruit';
exports.get = function(req, done, fail) {
    done({
        laboratoryActive:'active',
        laboratory_recruitActive:'active'
    });
};