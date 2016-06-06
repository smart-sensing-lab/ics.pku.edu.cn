var $btnDelete = $(module.elements).find('.btn-delete');
var $btnUpload = $(module.elements).find('.btn-upload');



//var debug = require('debug')('ics:admin-files');

$('input[id=infile]').change(function() {
    $('#photoCover').val($(this).val());
});


$btnDelete.click(function() {
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

$btnUpload.click(function() {
    var file=new FormData();
    file.append('file',$('infile').files[0]);
    $
        .ajax({

            type: 'POST',
            file:file,
            url: '/api/upload/',
            contentType:application/x-jpg
        })
        .done(function() {
            alert('保存成功！');
            //location.reload();
        })
        .fail(function(e) {
            console.error(e);
            alert('上传失败' + e.message);
        });
});



/*
 exports.post = function(req, done, fail, res) {
 var file = new File(req.body);
 file.creator = req.user.id;

 file.save()
 .then(x => res.redirect('/admin/files'))
 .catch(fail);
 };*/

