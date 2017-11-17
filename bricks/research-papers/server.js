exports.url = '/research-papers';
exports.get = function(req, done, fail) {
    done({
        research_papersActive:'active',
        patentActive:'active'
    });
};  