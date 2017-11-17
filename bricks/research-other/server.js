exports.url = '/research-other';
exports.get = function(req, done, fail) {
    done({
        research_otherActive:'active',
        patentActive:'active'
    });
};  