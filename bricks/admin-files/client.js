var $btnDelete = $(module.elements).find('.btn-delete');
var $btnUpload = $(module.elements).find('.btn-upload');

//var debug = require('debug')('ics:admin-files');

$('input[id=infile]').change(function() {
    $('#photoCover').val($(this).val());
});


$btnDelete.click(function() {
    //debug('12222222222');
    //console.log('eeeeeeeeeeeeeeeeeee');
    if (window.confirm('确认删除该文件吗？')) {
        var id = $(this).data('id');

        $
            .ajax({

                type: 'DELETE',
                url: '/api/upload/' + id
            })
            .done(function() {
                location.reload();
            })
            .fail(function(e) {
                console.error(e);
                alert('删除失败' + e.message);
            });
    }
});

$btnUpload.click(exports.post=function(req, done, fail, res) {
    var file = new File(req.body);
    file.creator = req.user.id;

    file.save()
        .then(x => res.redirect('/admin/files'))
    .catch(fail);
});



/*
 exports.post = function(req, done, fail, res) {
 var file = new File(req.body);
 file.creator = req.user.id;

 file.save()
 .then(x => res.redirect('/admin/files'))
 .catch(fail);
 };*/

