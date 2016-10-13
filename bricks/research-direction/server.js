exports.url = '/research-direction';
exports.get = function(req, done, fail) {
    done({
        research_directionActive:'active',
        researchActive:'active'
    });
};  