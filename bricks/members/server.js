exports.url = '/members';
exports.get = function(req, done, fail) {
    done({
        membersActive:'active'
    });
};