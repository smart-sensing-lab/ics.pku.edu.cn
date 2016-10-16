exports.url = '/members-doctor';
exports.get = function(req, done, fail) {
    done({
        members_doctorActive:'active',
        membersActive:'active'
    });
};  