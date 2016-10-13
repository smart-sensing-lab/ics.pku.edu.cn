$('[data-toggle="popover"]').popover();
$('[data-toggle="tooltip"]').tooltip();

$(window).load(function(){
    $('script[type="text/async-script"]').each(function(idx, el){
        var $script = $('<script>');
        if(el.dataset.src) $script.attr('src', el.dataset.src);
        else $script.html(el.text);
        $script.appendTo('body');
        el.remove();
    });
});
