$(function () {
    $('[data-toggle="popover"]').popover({
        html: true,
        content: function () {
            return $('#' + this.id + 'Popover').html();
        }
    });

    $('#openMenu').click(function () {
        $('#slideMobileMenu').slideToggle();
    });
})