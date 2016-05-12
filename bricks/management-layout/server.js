
exports.view = function(req, done, fail) {
    var breadcrumbs = this.context.breadcrumbs || [];
    breadcrumbs.unshift('首页');
    done({ breadcrumbs });
};
