exports.url = '/research-group';
exports.get = function(req, done, fail) {
    done({
        research_groupActive:'active',
        researchActive:'active'
    });
};  