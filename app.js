$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

$(function () {
    // Enables popover
    $("[data-toggle=popover]").popover();
});