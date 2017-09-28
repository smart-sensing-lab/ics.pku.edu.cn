exports.url = '/patent-all';
exports.get = function(req, done, fail) {
    done({
        patentActive:'active',
        patent_allActive:'active'
    });
};