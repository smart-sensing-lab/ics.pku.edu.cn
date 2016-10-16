exports.url = '/members-graduate';
exports.get = function(req, done, fail) {
    done({
        members_graduateActive:'active',
        membersActive:'active'
    });
};  