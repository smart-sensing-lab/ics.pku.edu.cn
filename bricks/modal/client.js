var $modal = $(module.elements);
var pending = true;
var cb = function(){};

$modal.on('hidden.bs.modal', function() {
    if (pending && typeof cb === 'function') {
        pending = false;
        cb(false);
    }
});

$modal.find('.btn-ok').click(function() {
    pending = false;
    $modal.modal('hide');
    if(typeof cb === 'function') cb(true);
    return false;
});

function confirm(msg, _cb) {
    msg = msg || '是否确认该操作？';
    $modal.find('h3').html(msg);
    cb = _cb;
    return $modal.modal();
}

exports.confirm = confirm;
