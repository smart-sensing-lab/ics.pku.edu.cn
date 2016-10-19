exports.url = '/laboratory-rules';
exports.get = function(req, done, fail) {
    // 需要先登录才能看
    if(!req.user) return fail(401);

    done({
        laboratoryActive:'active',
        laboratory_rulesActive:'active'
    });
};