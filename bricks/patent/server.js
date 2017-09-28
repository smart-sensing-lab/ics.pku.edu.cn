exports.url = '/patent';
exports.get = function(req, done, fail) {
    done({
        patentActive:'active',
        patent_processActive:'active'
    });
};