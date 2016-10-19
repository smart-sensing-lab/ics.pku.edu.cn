exports.url = '/laboratory-contact';
exports.get = function(req, done, fail) {
    done({
        laboratoryActive:'active',
        laboratory_contactActive:'active'
    });
};