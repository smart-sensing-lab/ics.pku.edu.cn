jQuery.validator.addMethod("phone", function(value, element) {
    return /^1[3|4|5|8]\d{9}$/.test(value);
}, '手机号不合法');

jQuery.validator.addMethod("regex", function(value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
}, '输入不合法');

jQuery.fn.reset = function() {
    var validator = $(this).data('validator');
    if (!validator) return false;

    validator.resetForm();
    this.reset();
};

var oldVal = jQuery.fn.val;
jQuery.fn.val = function() {
    if (this.prop('tagName') === 'FORM') {
        return _.fromPairs(this.serializeArray().map(function(v) {
            return [v.name, v.value];
        }));
    } else {
        return oldVal.apply(this, arguments);
    }
};

$('form').each(function(i, el) {
    var $this = $(el);
    $this
        .data('validator', $this.validate())
        .delegate('input, select, textarea', 'input propertychange', function(e) {
            $(e.target).valid();
        });
});
