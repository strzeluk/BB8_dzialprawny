$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

$(function () {
    $('[data-toggle="popover"]').popover({
        html: true,
        content: function () {
            return $('#' + this.id + 'Popover').html();
        }
    });
})