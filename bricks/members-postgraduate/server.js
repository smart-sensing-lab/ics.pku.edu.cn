exports.url = '/members-postgraduate';
exports.get = function(req, done, fail) {
    done({
        members_postgraduateActive:'active',
        membersActive:'active'
    });
};  