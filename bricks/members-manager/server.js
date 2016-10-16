exports.url = '/members-manager';
exports.get = function(req, done, fail) {
    done({
        members_managerActive:'active',
        membersActive:'active'
    });
};  