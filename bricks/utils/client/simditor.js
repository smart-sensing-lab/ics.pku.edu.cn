$.fn.simditor = function(options) {
    options = options || {};
    var $this = $(this),
        ret = new Simditor($.extend({
            textarea: $this,
            defaultImage: '/img/placeholder.png',
            upload: {
                url: '/api/upload',
                fileKey: 'file',
                connectionCount: 3,
                leaveConfirm: '正在上传文件，如果离开上传会自动取消'
            },
            pasteImage: true,
            toolbarFloat: false,
            markdown: false,
            toolbar: ['bold', 'color', '|', 'ol', 'ul', 'blockquote', '|', 'code', 'table', 'link', 'image', '|']
        }, options));

    return ret;
};
