$(function () {
    $('[data-toggle="popover"]').popover({
        html: true,
        content: function () {
            return $('#' + this.id + 'Popover').html();
        }
    });
})