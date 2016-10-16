exports.url = '/members-undergraduate';
exports.get = function(req, done, fail) {
    done({
        members_undergraduateActive:'active',
        membersActive:'active'
    });
};  