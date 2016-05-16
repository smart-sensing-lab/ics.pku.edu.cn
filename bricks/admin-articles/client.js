var $btnDelete = $(module.elements).find('.btn-delete');

$btnDelete.click(function() {
    if (window.confirm('确认删除该文章吗？')) {
        var id = $(this).data('id');
        $
            .ajax({
                type: 'DELETE',
                url: '/api/articles/' + id
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
